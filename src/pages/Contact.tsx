import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useContact } from '@/hooks/useContact';
// import {
//   Button,
//   Input,
//   Label,
//   Textarea,
//   Card,
//   CardContent,
//   Alert,
//   AlertTitle,
//   AlertDescription
// } from '@/components/ui';
import { MapPin, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   message?: string;
// }

export default function Contact() {
  const { t } = useLanguage();
  // const { sendMessage, loading, error, success, reset } = useContact();

  // const [formData, setFormData] = useState<FormData>({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const [errors, setErrors] = useState<FormErrors>({});
  // const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
  //   name: false,
  //   email: false,
  //   message: false
  // });

  // Reset success message after 5 seconds
  // useEffect(() => {
  //   if (success) {
  //     const timer = setTimeout(() => {
  //       reset();
  //       setFormData({ name: '', email: '', message: '' });
  //       setTouched({ name: false, email: false, message: false });
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [success, reset]);

  // const validateField = (
  //   name: keyof FormData,
  //   value: string
  // ): string | undefined => {
  //   switch (name) {
  //     case 'name':
  //       if (!value.trim()) {
  //         return t.contact.nameRequired;
  //       }
  //       if (value.trim().length < 2) {
  //         return t.contact.nameMinLength;
  //       }
  //       break;

  //     case 'email':
  //       if (!value.trim()) {
  //         return t.contact.emailRequired;
  //       }
  //       // Email regex validation
  //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //       if (!emailRegex.test(value)) {
  //         return t.contact.emailInvalid;
  //       }
  //       break;

  //     case 'message':
  //       if (!value.trim()) {
  //         return t.contact.messageRequired;
  //       }
  //       if (value.trim().length < 10) {
  //         return t.contact.messageMinLength;
  //       }
  //       break;
  //   }
  //   return undefined;
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));

  //   // Validate on change if field was touched
  //   if (touched[name as keyof FormData]) {
  //     const error = validateField(name as keyof FormData, value);
  //     setErrors(prev => ({ ...prev, [name]: error }));
  //   }
  // };

  // const handleBlur = (
  //   e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setTouched(prev => ({ ...prev, [name]: true }));

  //   const error = validateField(name as keyof FormData, value);
  //   setErrors(prev => ({ ...prev, [name]: error }));
  // };

  // const validateForm = (): boolean => {
  //   const newErrors: FormErrors = {};
  //   let isValid = true;

  //   (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
  //     const error = validateField(key, formData[key]);
  //     if (error) {
  //       newErrors[key] = error;
  //       isValid = false;
  //     }
  //   });

  //   setErrors(newErrors);
  //   setTouched({ name: true, email: true, message: true });
  //   return isValid;
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     return;
  //   }

  //   await sendMessage(formData);
  // };

  // const hasErrors = Object.values(errors).some(error => error !== undefined);

  return (
    <div className="container mx-auto pt-8 sm:pt-10 animate-fade-in">
      <h1 className="text-2xl sm:text-4xl mb-6 sm:mb-10 text-center ">
        {t.contact.title}
      </h1>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8 lg:gap-20">
          {/* Contact Info */}
          <div className="lg:w-[300px] xl:w-[350px]">
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="bg-secondary/30 p-2 sm:p-3 rounded-xl shrink-0">
                  <Phone
                    className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <a
                    href="tel:+34123456789"
                    className="text-sm sm:text-base text-muted-foreground hover:scale-105 transition-all duration-300 inline-block"
                    aria-label="Llamar al +34 123 456 789"
                  >
                    +34 123 456 789
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="bg-secondary/30 p-2 sm:p-3 rounded-xl shrink-0">
                  <Mail
                    className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <a
                    href="mailto:ascremosas.co@gmail.com"
                    className="text-sm sm:text-base text-muted-foreground hover:scale-105 transition-all duration-300 break-all inline-block"
                    aria-label="Enviar email a ascremosas.co@gmail.com"
                  >
                    ascremosas.co@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="bg-secondary/30 p-2 sm:p-3 rounded-xl shrink-0">
                  <MapPin
                    className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <address className="text-sm sm:text-base text-muted-foreground not-italic leading-relaxed">
                    Calle San Nicolás 5
                    <br />
                    15001 A Coruña, España
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="lg:w-[500px] xl:w-[600px]">
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.2862368368833!2d-8.401689423282889!3d43.37103867063379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7d6684af949b%3A0x8b42210a71d026b!2sAS%20cremosas!5e0!3m2!1ses!2ses!4v1766046271579!5m2!1ses!2ses"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.contact.mapLabel}
                aria-label={t.contact.mapLabel}
              />
              <a
                href="https://maps.app.goo.gl/ho7LCFCHNHPRKyrq8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-lg text-sm font-medium hover:bg-background hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
                aria-label={t.contact.viewOnMaps}
              >
                {t.contact.viewOnMaps}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      {/* <div className="mt-12 lg:mt-16">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center">
                {t.contact.getInTouch}
              </h2>

              {success && (
                <Alert className="mb-6 border-green-500 bg-green-50 dark:bg-green-950">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <AlertTitle className="text-green-800 dark:text-green-200">
                    {t.contact.successTitle}
                  </AlertTitle>
                  <AlertDescription className="text-green-700 dark:text-green-300">
                    {t.contact.successMessage}
                  </AlertDescription>
                </Alert>
              )}

              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-5 w-5" />
                  <AlertTitle>{t.contact.errorTitle}</AlertTitle>
                  <AlertDescription>
                    {error.message || t.contact.errorMessage}
                  </AlertDescription>
                </Alert>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label={t.contact.formLabel}
                noValidate
              >
                <div>
                  <Label
                    htmlFor="contactName"
                    className={
                      errors.name && touched.name ? 'text-destructive' : ''
                    }
                  >
                    {t.contact.name}
                    <span
                      className="text-destructive ml-1"
                      aria-label="obligatorio"
                    >
                      *
                    </span>
                  </Label>
                  <Input
                    id="contactName"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t.contact.namePlaceholder}
                    aria-label={t.contact.nameLabel}
                    aria-invalid={!!(errors.name && touched.name)}
                    aria-describedby={
                      errors.name && touched.name ? 'name-error' : undefined
                    }
                    className={`mt-1.5 ${
                      errors.name && touched.name ? 'border-destructive' : ''
                    }`}
                    disabled={loading}
                    required
                  />
                  {errors.name && touched.name && (
                    <p
                      id="name-error"
                      className="text-sm text-destructive mt-1.5"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="contactEmail"
                    className={
                      errors.email && touched.email ? 'text-destructive' : ''
                    }
                  >
                    {t.contact.email}
                    <span
                      className="text-destructive ml-1"
                      aria-label="obligatorio"
                    >
                      *
                    </span>
                  </Label>
                  <Input
                    id="contactEmail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t.contact.emailPlaceholder}
                    aria-label={t.contact.emailLabel}
                    aria-invalid={!!(errors.email && touched.email)}
                    aria-describedby={
                      errors.email && touched.email ? 'email-error' : undefined
                    }
                    className={`mt-1.5 ${
                      errors.email && touched.email ? 'border-destructive' : ''
                    }`}
                    disabled={loading}
                    required
                  />
                  {errors.email && touched.email && (
                    <p
                      id="email-error"
                      className="text-sm text-destructive mt-1.5"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="contactMessage"
                    className={
                      errors.message && touched.message
                        ? 'text-destructive'
                        : ''
                    }
                  >
                    {t.contact.message}
                    <span
                      className="text-destructive ml-1"
                      aria-label="obligatorio"
                    >
                      *
                    </span>
                  </Label>
                  <Textarea
                    id="contactMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t.contact.messagePlaceholder}
                    aria-label={t.contact.messageLabel}
                    aria-invalid={!!(errors.message && touched.message)}
                    aria-describedby={
                      errors.message && touched.message
                        ? 'message-error'
                        : undefined
                    }
                    className={`mt-1.5 min-h-[150px] resize-none ${
                      errors.message && touched.message
                        ? 'border-destructive'
                        : ''
                    }`}
                    disabled={loading}
                    required
                  />
                  {errors.message && touched.message && (
                    <p
                      id="message-error"
                      className="text-sm text-destructive mt-1.5"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  size="lg"
                  type="submit"
                  className="w-full py-6 text-base"
                  disabled={loading || hasErrors}
                  loading={loading}
                  aria-label={t.contact.submitLabel}
                >
                  {loading ? t.contact.sending : t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </div>
  );
}
