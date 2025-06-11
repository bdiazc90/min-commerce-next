import AvatarPicker from "@/components/ui/avatar-picker";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CheckoutPage() {
    return (
        <main className="p-24">
            <h2 className="text-6xl">Orden de Compra</h2>
            <hr />
            <Button>Comprar</Button>
            <Button variant={"destructive"}>Borrar elementos</Button>
            <Button variant={"secondary"}>Cancelar y Volver</Button>
            <hr />
            <Card>
                <AvatarPicker />
            </Card>
        </main>
    )
}