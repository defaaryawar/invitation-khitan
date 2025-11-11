import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ScrollAnimation from "../3d/ScrollAnimation";
import { Calendar, User, Mail, MessageCircle, CheckCircle } from "lucide-react";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("RSVP Data:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-b from-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5E3C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
              >
                Terima Kasih
              </motion.h2>
              <p className="text-brown-light text-lg">Konfirmasi kehadiran Anda telah kami terima</p>
            </div>
          </ScrollAnimation>

          <div className="max-w-2xl mx-auto">
            <Card glassEffect className="p-10 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle size={64} className="text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Kehadiran Anda Sangat Berarti</h3>
              <p className="text-brown-dark mb-6">
                Kami telah menerima konfirmasi kehadiran Anda untuk acara syukuran khitanan putra kami.
                Terima kasih atas doa dan dukungan Anda.
              </p>
              <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                Kembali ke Form
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5E3C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
            >
              Konfirmasi Kehadiran
            </motion.h2>
            <p className="text-brown-light text-lg">Bantu kami dengan mengkonfirmasi kehadiran Anda</p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <Card glassEffect className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-left mb-2 text-brown-dark font-medium">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      Nama Lengkap
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-light focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-left mb-2 text-brown-dark font-medium">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      Email
                    </div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-light focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="attendance" className="block text-left mb-2 text-brown-dark font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    Kehadiran
                  </div>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="hadir"
                      checked={formData.attendance === "hadir"}
                      onChange={handleChange}
                      className="mr-2 h-5 w-5 text-accent focus:ring-accent"
                    />
                    <span className="text-brown-dark">Hadir</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="tidak hadir"
                      checked={formData.attendance === "tidak hadir"}
                      onChange={handleChange}
                      className="mr-2 h-5 w-5 text-accent focus:ring-accent"
                    />
                    <span className="text-brown-dark">Tidak Hadir</span>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-left mb-2 text-brown-dark font-medium">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} />
                    Pesan/Ucapan (Opsional)
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-brown-light focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                  placeholder="Ucapan atau doa untuk Muhammad Rizki..."
                ></textarea>
              </div>

              <div className="text-center">
                <Button variant="primary" className="w-full md:w-auto px-8">
                  Kirim Konfirmasi
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;