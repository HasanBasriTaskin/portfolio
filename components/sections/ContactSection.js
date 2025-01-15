'use client';

export default function ContactSection() {
    const handleSubmit = (e) => {
        e.preventDefault(); // Form submit'i engelle
        console.log("Form submitted");
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">İletişim</h2>
                <div className="max-w-lg mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">İsim</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Mesaj</label>
                            <textarea
                                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800"
                                rows={4}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
} 