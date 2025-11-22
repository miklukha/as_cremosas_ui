import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl animate-fade-in">
      <h1 className="font-serif text-5xl font-bold mb-12 text-center text-foreground">
        {t.contact.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <Card>
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-semibold mb-6">{t.contact.getInTouch}</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="contactName">{t.contact.name}</Label>
                  <Input id="contactName" placeholder="Tu nombre" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="contactEmail">{t.contact.email}</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="tu@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contactMessage">{t.contact.message}</Label>
                  <Textarea
                    id="contactMessage"
                    placeholder="Escribe tu mensaje aquí..."
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-accent py-6">
                  {t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-secondary p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t.contact.address}</h3>
                <p className="text-muted-foreground">
                  Calle Ejemplo 123
                  <br />
                  15001 A Coruña, Galicia
                  <br />
                  España
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-secondary p-3 rounded-lg">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">info@ascremosas.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-secondary p-3 rounded-lg">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                <p className="text-muted-foreground">+34 981 000 000</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-secondary rounded-lg h-64 flex items-center justify-center">
            <p className="text-muted-foreground">Mapa de ubicación</p>
          </div>
        </div>
      </div>
    </div>
  );
}
