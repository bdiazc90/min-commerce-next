"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Power } from "lucide-react";
import Link from "next/link";

export default function AuthButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<Link href={"/profile"} className="text-xs border-1 rounded-lg px-6 h-8 flex items-center">{session.user?.name}</Link>
				<Button onClick={() => signOut()} variant={"destructive"} size="sm" className="relative">
					<Power className="h-4 w-4" />
					<span className="sr-only">Cerrar Sesión</span>
				</Button>
			</>
		);
	}

	return <Button size={"sm"} variant={"outline"} onClick={() => signIn("google")}>Iniciar con Google</Button>;
}
