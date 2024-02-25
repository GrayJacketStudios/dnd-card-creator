'use client';
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/FffvlpECs2y
 */
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import lado_a from "@/components/ui/card_a.svg";
import lado_b from "@/components/ui/card_b.svg";
//import Image from "next/image";
import {useState, useRef, useEffect} from "react";
import {convertAsterisksToBold, drawFormattedText} from "@/lib/utils";

export function CardForm() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [level, setLevel] = useState('');
    const [range, setRange] = useState('');
    const [components, setComponents] = useState('');
    const [duration, setDuration] = useState('');
    const [castingTime, setCastingTime] = useState('');
    const [file, setFile] = useState<string | ArrayBuffer | null>('');
    const [description, setDescription] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const canvasRefBack = useRef<HTMLCanvasElement>(null);
    const canvasRefFront = useRef<HTMLCanvasElement>(null);

  const downloadImages = () => {
    const canvases = [canvasRefBack.current, canvasRefFront.current];
    canvases.forEach((canvas, index) => {
      if (canvas) {
        const image = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.href = image;
        link.download = `card_${name}_${index === 0 ? 'back':'front'}.png`; // Custom names for each image
        link.style.display = 'none'; // Hide the link
        document.body.appendChild(link); // Append to body to ensure it can be clicked
        link.click(); // Simulate the click to trigger download
        document.body.removeChild(link); // Remove the link from the body
      }
    });
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the selected file using the FileReader API
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the loaded file's URL as the selectedImage state
        setFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    handleDrawBack();
    handleDrawFront()
  }, [file, name, description, castingTime, duration, components, range, level, type]);

  const handleDrawBack = () => {
    const canvas = canvasRefBack.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      const uploadedImage = new Image();
      const templateImage = new Image();

      templateImage.onload = () => {
        // @ts-ignore
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        // @ts-ignore
        ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height); // Draw the uploaded image
        ctx.font = 'bold 56px Palatino';
        ctx.textAlign = 'center';
        // @ts-ignore
        const centerX = canvas.width / 2;
        // Draw text over the image (adjust positioning and text as needed)
        ctx.fillText(name, centerX, 155);
        ctx.font = '46px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(type, 125, 1275);
        ctx.textAlign = 'right';
        // @ts-ignore
        ctx.fillText(!(/(\d)+/.test(level)) ? level : `Nivel: ${level}`, canvas.width - 135, 1275);

        ctx.textAlign = 'center';
        ctx.font = '32px Arial';
        ctx.fillText(range, 175, 1400);
        ctx.fillText(castingTime, 370, 1400);
        ctx.fillText(duration, 545, 1400);
        ctx.fillText(components, 700, 1400);


        if (file){
            uploadedImage.onload = () => {
                ctx.globalCompositeOperation = 'destination-over';
                ctx.drawImage(uploadedImage, 115, 225, 660, 990) // Draw the uploaded image
                ctx.globalCompositeOperation = 'source-over';
                // Set styles for text
                // Add more text fields as needed
            };
            uploadedImage.src = file as string;
        }
      };
      templateImage.src = '/card_b.svg';
    }
  };

  const handleDrawFront = () => {
    const canvas = canvasRefFront.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      const templateImage = new Image();

      templateImage.onload = () => {
        // @ts-ignore
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        // @ts-ignore
        ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height); // Draw the uploaded image
        ctx.font = 'bold 56px Palatino';
        ctx.textAlign = 'center';
        // @ts-ignore
        const centerX = canvas.width / 2;
        // Draw text over the image (adjust positioning and text as needed)
        ctx.fillText(name, centerX, 165);
        ctx.textAlign = 'left';

        ctx.font = 'bold 38px Palatino';
        ctx.fillText("Rango", 230, 275);

        ctx.fillText("Duracion", 565, 275);

        ctx.fillText("Casteo", 230, 390);

        ctx.fillText("Componentes", 565, 390);

        ctx.font = '32px Arial';
        ctx.fillText(range, 230, 320);
        ctx.fillText(castingTime, 230, 435);
        ctx.fillText(duration, 565, 320);
        ctx.fillText(components, 575, 435);

        drawFormattedText(ctx, description, 145, 565, 40, '38px', 'Arial');
      };
      templateImage.src = '/card_a.svg';
    }
  };

  handleDrawBack();
  handleDrawFront();

  return (
      <div className="flex justify-center items-center space-x-6 bg-gray-900 p-8">
        <form className="flex flex-col space-y-4" onSubmit={(event) => {
          event.preventDefault();
          downloadImages();
        }}>
          <Input value={name} onChange={(e) => {
            setName(e.target.value);
            handleDrawBack();
          }} placeholder="Nombre"/>
          <Input value={type} onChange={(e) => {
            setType(e.target.value);
            handleDrawBack();
          }} placeholder="Tipo"/>
          <Input value={level} onChange={(e) => {
            setLevel(e.target.value);
            handleDrawBack();
          }} placeholder="Nivel"/>
          <Input value={range} onChange={(e) => {
            setRange(e.target.value);
            handleDrawBack();
          }} placeholder="Rango"/>
          <Input placeholder="Duracion" value={duration} onChange={e => {
            setDuration(e.target.value);
            handleDrawBack();
          }}/>
          <Input placeholder="Tiempo de Casteo" value={castingTime} onChange={e => {
            setCastingTime(e.target.value);
            handleDrawBack();
          }}/>
          <Input placeholder="Componentes" value={components} onChange={e => {
            setComponents(e.target.value);
            handleDrawBack();
          }}/>
          <Input type="file" accept='image/*' onChange={handleImageChange}/>
          <Textarea placeholder="Descripcion" value={description}
                    onChange={event => setDescription(event.target.value)}/>
          <Button className="bg-red-500">Descargar</Button>
        </form>
       <div className="flex justify-between items-center space-x-4">
        <canvas className="border border-gray-300" style={{height: 480, width: 286}} ref={canvasRefBack} height={1500} width={896}/>
        <canvas className="border border-gray-300" style={{height: 480, width: 286}} ref={canvasRefFront} height={1500} width={896}/>
       </div>
      </div>
  )
}
