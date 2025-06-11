"use client"

import type { CartItem as CartItemType } from "@/models/cart"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const quantitySchema = z.object({
  quantity: z.coerce
    .number({
      required_error: "La cantidad es requerida",
      invalid_type_error: "Debe ser un número",
    })
    .min(1, { message: "Debe ser mayor a 0" })
    .max(10, { message: "Debe ser menor a 11" }),
})

type QuantityValues = z.infer<typeof quantitySchema>

export default function CartItem({ id, title, price, imageUrl, category, quantity }: CartItemType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuantityValues>({
    resolver: zodResolver(quantitySchema),
    mode: "onChange",
    defaultValues: {
      quantity: quantity, // Establecer el valor inicial
    },
  })

  const onUpdateQuantity = (data: QuantityValues) => {
    console.log("Nueva cantidad:", data.quantity)
    // Aquí puedes llamar a tu función para actualizar el carrito
    // updateCartItem(id, data.quantity);
  }

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group",
        "p-4 rounded-xl",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
        "hover:border-zinc-300 dark:hover:border-zinc-700",
        "transition-all duration-200",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "relative w-12 h-12 rounded-lg overflow-hidden",
              "bg-zinc-100 dark:bg-zinc-800",
              "transition-colors duration-200",
              "group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700",
            )}
          >
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
              <span className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                {category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <span>${price}</span>
              <span>•</span>
              <span>Cantidad: {quantity}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-start">
            <div className="flex flex-col">
              <Input
                type="number"
                min="1"
                max="10"
                className={cn("w-16 h-8 text-center", errors.quantity && "border-red-500 focus-visible:ring-red-500")}
                {...register("quantity")}
              />
              {errors.quantity && <p className="text-xs text-red-500 mt-1">{errors.quantity.message}</p>}
            </div>
            <Button size="sm" variant="outline" className="gap-1.5" onClick={handleSubmit(onUpdateQuantity)}>
              <RefreshCcw className="w-3.5 h-3.5" />
              Actualizar
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
