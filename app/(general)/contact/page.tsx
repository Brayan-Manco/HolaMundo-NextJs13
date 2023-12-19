import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Description',
    keywords: ['Brayan', 'Infomración', 'Contactos']
  }

export default function ContactPage () {
    return (
        <main className="flex flex-col items-center">
            <span className="text-7xl">Contact Page</span>
        </main>
    )
}