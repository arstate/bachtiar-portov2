import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const basePath = path.join(process.cwd(), 'database', 'fotografi');
  const photographyData = [];

  if (fs.existsSync(basePath)) {
    const categories = fs.readdirSync(basePath);
    for (const category of categories) {
      const categoryPath = path.join(basePath, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const detailPath = path.join(categoryPath, 'detail-galeri.txt');
        if (fs.existsSync(detailPath)) {
          const content = fs.readFileSync(detailPath, 'utf8');
          
          const lines = content.split('\n');
          let currentItem: any = { id: '', category: '', theme: '', layout: '', description: '', images: [] as any[] };
          let currentImage: any = null;

          for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            
            if (line.startsWith('ID: ')) currentItem.id = line.substring(4);
            else if (line.startsWith('Category: ')) currentItem.category = line.substring(10);
            else if (line.startsWith('Theme: ')) currentItem.theme = line.substring(7);
            else if (line.startsWith('Layout: ')) currentItem.layout = line.substring(8);
            else if (line.startsWith('Description: ')) currentItem.description = line.substring(13);
            else if (line.startsWith('# Image')) {
              if (currentImage) {
                enrichImageDescriptions(currentItem.category, currentImage);
                currentItem.images.push(currentImage);
              }
              currentImage = {};
            }
            else if (line.startsWith('Source: ') && currentImage) currentImage.src = line.substring(8);
            else if (line.startsWith('Location: ') && currentImage) currentImage.location = line.substring(10);
            else if (line.startsWith('Year: ') && currentImage) currentImage.year = line.substring(6);
          }
          if (currentImage) {
            enrichImageDescriptions(currentItem.category, currentImage);
            currentItem.images.push(currentImage);
          }
          
          photographyData.push(currentItem);
        }
      }
    }
  }

  return NextResponse.json(photographyData);
}

function enrichImageDescriptions(category: string, image: any) {
  const loc = (image.location || "").toUpperCase();
  const cat = (category || "").toUpperCase();
  
  // Default values
  image.challenge = `Capturing the essence and scale of ${image.location || "the event"} while navigating unpredictable conditions and fast-paced moments.`;
  image.solution = "Utilizing strategic lens choices and anticipating key actions to secure compelling, structured compositions tailored to the environment.";
  
  if (cat.includes('WILDLIFE')) {
     if (loc.includes('TIGER')) {
        image.challenge = "Tracking the majestic tiger safely without disturbing its environment, while waiting for perfect lighting through dense foliage.";
        image.solution = "Employed a telephoto lens with a fast aperture to isolate the subject, ensuring sharp focus on the eyes while melting the background.";
     } else if (loc.includes('CAT')) {
        image.challenge = "Anticipating sudden, erratic movements from the feline subject while managing exposure in a rapidly changing natural environment.";
        image.solution = "Used continuous auto-focus tracking and high shutter speed to freeze motion, relying on available ambient light for a cinematic feel.";
     }
  } else if (cat.includes('GRADUATION')) {
     if (loc.includes('ISNA')) {
        image.challenge = "Balancing the harsh outdoor sunlight during Isna's graduation while ensuring her expression remained vibrant and evenly lit.";
        image.solution = "Positioned her in flattering open shade, using the campus architecture to frame her achievement dynamically.";
     } else if (loc.includes('MIA')) {
        image.challenge = "Managing crowded backgrounds at Universitas Muhammadiyah Sidoarjo to create an intimate portrait of Mia's milestone.";
        image.solution = "Utilized a shallow depth of field to isolate Mia, letting the bustling campus blur into a soft, celebratory backdrop.";
     } else if (loc.includes('FIFA')) {
        image.challenge = "Capturing the emotional weight of Fifa's graduation at UIN Jember amidst unpredictable weather and tight schedules.";
        image.solution = "Relied on fast prime lenses to quickly adapt to indoor-outdoor lighting transitions, keeping the focus strictly on her candid joy.";
     } else if (loc.includes('ERLYSA')) {
        image.challenge = "Creating a pristine, timeless look for Erlysa's graduation photos despite the overwhelming graduation day chaos at UIN Malang.";
        image.solution = "Directed Erlysa into localized, clean architectural pockets of the university for elegant, minimalist compositions.";
     } else {
        image.challenge = "Dealing with large crowds and varying ambient light during the tense, emotional moments of the graduation ceremony.";
        image.solution = "Used a versatile zoom lens to quickly switch between wide campus shots and tight, intimate portraits of the graduates.";
     }
  } else if (cat.includes('PREWEDDING')) {
     if (loc.includes('NITA & BUSTA')) {
        image.challenge = "Coordinating Nita & Busta's poses naturally across a sprawling landscape while fighting fading evening light.";
        image.solution = "Guided them into fluid, candid interactions, using a wide-angle lens to capture the vastness of the scenery intertwined with their romance.";
     } else if (loc.includes('IAN & ANGGUN')) {
        image.challenge = "Creating a moody, intimate atmosphere for Ian & Anggun while dealing with contrasting bright elements in the background.";
        image.solution = "Exposed for the highlights and used artificial continuous lighting to softly illuminate their faces, resulting in a dramatic cinematic look.";
     } else if (loc.includes('NOVI & IVAN')) {
        image.challenge = "Bringing out the playful energy of Novi & Ivan in an environment that felt rigid and overly structured.";
        image.solution = "Encouraged spontaneous movement and shot from lower angles to make the couple stand out against the geometric background.";
     }
  } else if (cat.includes('WEDDING')) {
     if (loc.includes('NITA & BUSTA')) {
        image.challenge = "Documenting the grand scale of Nita & Busta's wedding without losing the intimate, fleeting glances between them.";
        image.solution = "Simultaneously ran wide overview shots and tight 85mm headshots, ensuring both the spectacular decor and quiet emotions were captured.";
     } else if (loc.includes('LISA & HENDRA')) {
        image.challenge = "Handling the extreme low-light conditions during Lisa & Hendra's evening reception without ruining the romantic ambiance.";
        image.solution = "Used a combination of off-camera flash and slow shutter drag to capture the vibrant party energy while keeping the couple tack sharp.";
     }
  } else if (cat.includes('YEARBOOK')) {
     if (loc.includes('SMK ANTARTIKA')) {
        image.challenge = "Organizing a large group from SMK Antartika into a cohesive frame that still allowed individual personalities to shine.";
        image.solution = "Structured the group using staggered seating and dynamic angles, encouraging relaxed posture to avoid stiff, traditional yearbook looks.";
     } else if (loc.includes('SMK PLUS NU SIDOARJO') && (image.year === '2025')) {
        image.challenge = "Capturing the modern, energetic vibe of the 2025 class in a way that felt fresh and editorial rather than conventional.";
        image.solution = "Employed wide lenses and dramatic lighting setups inside the school halls, creating a high-fashion aesthetic for the students.";
     } else if (loc.includes('SMK PLUS NU SIDOARJO') && (image.year === '2024')) {
        image.challenge = "Working with outdoor midday shadows for the 2024 class photo while keeping the group perfectly exposed across the frame.";
        image.solution = "Utilized large diffusion panels and positioned the students with the sun acting as a rim light for striking separation from the background.";
     }
  } else if (cat.includes('CONCERT')) {
     if (loc.includes('DPR FEST')) {
        image.challenge = "Keeping up with the chaotic energy and intense, rapid laser lights during the climax of DPR Fest.";
        image.solution = "Locked focus manually and shot in high-speed burst mode, leaning into slightly slower shutter speeds to capture the kinetic motion of the crowd.";
     } else if (loc.includes('ROCKAMINATION')) {
        image.challenge = "Navigating a dark, intimate venue at Rockamination where the performers were constantly moving into shadows.";
        image.solution = "Pushed the ISO significantly and used extremely fast prime lenses, embracing a gritty, high-contrast black-and-white editing style.";
     } else if (loc.includes('DUA DELAPAN PADI')) {
        image.challenge = "Capturing the nostalgic, emotional resonance of the performance without relying on intrusive flash firing.";
        image.solution = "Timed shots exactly with the stage strobes, capturing silhouetted and deeply atmospheric moments of the band interacting with fans.";
     }
  } else if (cat.includes('EVENT')) {
     if (loc.includes('IONATION')) {
        image.challenge = "Documenting the fast-paced, multi-stage activities at Ionation 6 while maintaining a consistent visual brand.";
        image.solution = "Used a 24-70mm workhorse lens to quickly adapt to wide crowd reactions and tight stage details seamlessly.";
     } else if (loc.includes('MASJID AL AKBAR')) {
        image.challenge = "Managing exposure between the bright outdoor morning light and the shadowed areas during the mass gathering.";
        image.solution = "Shot in RAW with exposure bracketing, leaning on framing techniques that led the eye directly toward the main procession.";
     } else if (loc.includes('PORPROV')) {
        image.challenge = "Freezing high-speed athletic movements at Porprov VIII from long distances with unpredictable action directions.";
        image.solution = "Used a 70-200mm lens combined with continuous AF and panned smoothly with the athletes to capture dynamic motion blur.";
     }
  } else if (cat.includes('LANDSCAPE')) {
     if (loc.includes('GUNUNG GAMBIR')) {
        image.challenge = "Showcasing the immense depth of Gunung Gambir while dealing with thick morning mist that reduced contrast.";
        image.solution = "Used a telephoto lens to compress the layers of the tea plantation, turning the mist into an atmospheric framing element.";
     } else if (loc.includes('ARSITEKTUR RUMAH ALANA')) {
        image.challenge = "Capturing the clean lines of Rumah Alana without suffering from perspective distortion in tight exterior angles.";
        image.solution = "Used a tilt-shift perspective and shot during blue hour to balance the warm interior lights with the cool, structured exterior.";
     } else if (loc.includes('JEMBER')) {
        image.challenge = "Finding a unique, striking angle of a common Jember landscape that felt majestic rather than ordinary.";
        image.solution = "Got low to the ground and incorporated strong leading lines, stopping down the aperture to ensure edge-to-edge sharpness.";
     }
  }
}

