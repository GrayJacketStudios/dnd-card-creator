/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/x7QNp2AIYIW
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import cardA from "@/components/ui/card_a.svg";
import Image from "next/image";

export function CardComponent() {
  return (
    <Card className="mx-auto max-w-md p-6 bg-[#1a202c] rounded-lg shadow-lg dark:bg-[#1a202c]">
      <Image src={cardA} alt="card back" width={'264.57'} />
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <Label className="text-sm text-[#f9fafb]" htmlFor="name">
            Nombre
          </Label>
          <Input
            className="w-full bg-[#2d3748] text-[#f9fafb] border border-[#4a5568] rounded-lg focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50"
            id="name"
            placeholder="Nombre"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="text-sm text-[#f9fafb]" htmlFor="type">
            Tipo
          </Label>
          <Input
            className="w-full bg-[#2d3748] text-[#f9fafb] border border-[#4a5568] rounded-lg focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50"
            id="type"
            placeholder="Tipo"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="text-sm text-[#f9fafb]" htmlFor="level">
            Nivel
          </Label>
          <Input
            className="w-full bg-[#2d3748] text-[#f9fafb] border border-[#4a5568] rounded-lg focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50"
            id="level"
            placeholder="Nivel"
            type="number"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="text-sm text-[#f9fafb]" htmlFor="range">
            Rango
          </Label>
          <Input
            className="w-full bg-[#2d3748] text-[#f9fafb] border border-[#4a5568] rounded-lg focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50"
            id="range"
            placeholder="Rango"
            type="number"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="text-sm text-[#f9fafb]" htmlFor="casting-time">
            Tiempo de casteo
          </Label>
          <Input
            className="w-full bg-[#2d3748] text-[#f9fafb] border border-[#4a5568] rounded-lg focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50"
            id="casting-time"
            placeholder="Tiempo de casteo"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="text-sm text-[#f9fafb]" htmlFor="duration">
            Duración
          </Label>
          <Input
            className="w-full bg-[#2d3748] text-[#f9fafb] border border-[#4a5568] rounded-lg focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50"
            id="duration"
            placeholder="Duración"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="text-sm text-[#f9fafb]" htmlFor="components">
            Componentes
          </Label>
          <Input
            className="w-full bg-[#2d3748] text-[#f9fafb] border border-[#4a5568] rounded-lg focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50"
            id="components"
            placeholder="Componentes"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="text-sm text-[#f9fafb]" htmlFor="image">
            Imagen
          </Label>
          <Input
            accept="image/*"
            className="w-full bg-[#2d3748] text-[#f9fafb] border border-[#4a5568] rounded-lg focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50"
            id="image"
            type="file"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="text-sm text-[#f9fafb]" htmlFor="description">
            Descripción
          </Label>
          <Textarea
            className="min-h-[100px] w-full bg-[#2d3748] text-[#f9fafb] border border-[#4a5568] rounded-lg focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50"
            id="description"
            placeholder="Descripción"
          />
        </div>
        <Button className="w-full bg-[#3182ce] text-[#f9fafb] hover:bg-[#2c5282] focus:ring focus:ring-[#63b3ed] focus:ring-opacity-50">
          Generar tarjeta
        </Button>
      </div>
    </Card>
  )
}
