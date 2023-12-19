import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About',
    description: 'Description',
    keywords: ['Brayan', 'Infomración', 'Sobre nosotros']
  }

export default function AboutPage () {
    return (
        <main className="flex flex-col items-center">
            <span className="text-7xl">About Page</span>
        </main>
    )
}