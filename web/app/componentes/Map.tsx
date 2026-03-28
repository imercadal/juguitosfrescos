export default function Map() {
    return (
        <div className="w-full h-40 md:h-36 rounded-lg overflow-hidden">
            <iframe
                title="Ubicación de Juguitos Frescos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6328259179613!2d-70.6575659234882!3d-33.43281579661079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a8cea3534f%3A0x72a6708497899b6e!2sJuguitos%20Frescos!5e0!3m2!1sen!2sus!4v1774729785099!5m2!1sen!2sus" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};