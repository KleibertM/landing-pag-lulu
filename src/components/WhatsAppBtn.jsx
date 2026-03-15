export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/51933704881?text=Hola%20Lourdes%2C%20estoy%20interesado%20en%20solicitar%20una%20consultor%C3%ADa.%20Podr%C3%ADas%20ayudarme%3F"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
            title="Chat con nosotros"
        >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.52.909 3.125 1.388 4.773 1.389 5.233 0 9.493-4.258 9.495-9.493.002-2.536-.987-4.92-2.787-6.72s-4.183-2.788-6.718-2.789c-5.235 0-9.493 4.258-9.496 9.494-.001 1.767.491 3.491 1.425 4.991l-1.07 3.909 4.015-1.054z" />
            </svg>
        </a>
    );
}