import { useLanguage } from '@/context/LanguageContext';
import {
  Button,
  Input,
  Label,
  Textarea,
  Card,
  CardContent
} from '@/components/ui';
import { Building2, Users, TrendingUp } from 'lucide-react';

export default function B2B() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto py-8 sm:py-10 animate-fade-in max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-4xl mb-6 sm:mb-10 text-center ">
          {t.b2b.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t.b2b.description}
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center">
          <CardContent className="p-8">
            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Eventos Corporativos
            </h3>
            <p className="text-muted-foreground">
              Perfecto para celebraciones de empresa y eventos especiales
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-8">
            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Grandes Volúmenes
            </h3>
            <p className="text-muted-foreground">
              Condiciones especiales para pedidos de gran volumen
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-8">
            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Socios Comerciales
            </h3>
            <p className="text-muted-foreground">
              Programa de colaboración para restaurantes y tiendas
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Inquiry Form */}
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8">
          <h2 className="font-serif text-3xl font-semibold mb-6 text-center">
            {t.b2b.inquiry}
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="companyName">Nombre de la empresa</Label>
                <Input
                  id="companyName"
                  placeholder="Tu empresa"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="contactPerson">Persona de contacto</Label>
                <Input
                  id="contactPerson"
                  placeholder="Tu nombre"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="b2bEmail">Email</Label>
                <Input
                  id="b2bEmail"
                  type="email"
                  placeholder="empresa@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="b2bPhone">Teléfono</Label>
                <Input
                  id="b2bPhone"
                  type="tel"
                  placeholder="+34 600 000 000"
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="orderSize">Volumen estimado del pedido</Label>
              <Input
                id="orderSize"
                placeholder="Ej: 50 unidades mensuales"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="b2bMessage">Detalles adicionales</Label>
              <Textarea
                id="b2bMessage"
                placeholder="Cuéntanos más sobre tu proyecto..."
                className="mt-2 min-h-[120px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-accent py-6 text-lg"
            >
              Enviar consulta
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
