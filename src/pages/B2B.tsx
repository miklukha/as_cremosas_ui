import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useB2B } from '@/hooks/useB2B';
import { toast } from '@/components/ui/sonner';
import {
  Button,
  Input,
  Label,
  Textarea,
  Card,
  CardContent,
  Checkbox
} from '@/components/ui';
import { Building2, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  message: string;
  acceptTerms: boolean;
}

interface FormErrors {
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  message?: string;
  acceptTerms?: string;
}

export default function B2B() {
  const { t } = useLanguage();
  const { sendInquiry, loading, error, success, reset } = useB2B();

  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    companyName: false,
    contactPerson: false,
    email: false,
    phone: false,
    message: false,
    acceptTerms: false
  });

  useEffect(() => {
    if (success) {
      toast.success(t.b2b?.success?.title, {
        description: t.b2b?.success?.message,
        duration: 5000
      });

      // Clear form immediately
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        message: '',
        acceptTerms: false
      });
      setTouched({
        companyName: false,
        contactPerson: false,
        email: false,
        phone: false,
        message: false,
        acceptTerms: false
      });
      setErrors({});

      reset();
    }
  }, [success, reset, t.b2b?.success?.title, t.b2b?.success?.message]);

  useEffect(() => {
    if (error) {
      toast.error(t.b2b?.error?.title, {
        description: t.b2b?.error?.message || error.message,
        duration: 5000
      });
    }
  }, [error, t.b2b?.error?.title, t.b2b?.error?.message]);

  const validateField = (
    name: keyof FormData,
    value: string | boolean | undefined
  ): string | undefined => {
    switch (name) {
      case 'companyName':
        if (!value || !(value as string).trim()) {
          return t.b2b?.validation?.companyNameRequired;
        }
        if ((value as string).trim().length < 2) {
          return t.b2b?.validation?.companyNameMinLength;
        }
        break;

      case 'contactPerson':
        if (!value || !(value as string).trim()) {
          return t.b2b?.validation?.contactPersonRequired;
        }
        if ((value as string).trim().length < 2) {
          return t.b2b?.validation?.contactPersonMinLength;
        }
        break;

      case 'email':
        if (!value || !(value as string).trim()) {
          return t.b2b?.validation?.emailRequired;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)) {
          return t.b2b?.validation?.emailInvalid;
        }
        break;

      case 'phone':
        if (typeof value !== 'string' || !value.trim()) {
          return t.b2b?.validation?.phoneRequired;
        }
        // Phone validation: only digits and + sign
        // Allows international formats: +34..., +1..., +44..., etc.
        const phoneRegex = /^\+?\d+$/;
        const cleanPhone = value.trim();

        // Must contain only digits and optional leading +
        if (!phoneRegex.test(cleanPhone)) {
          return t.b2b?.validation?.phoneInvalid;
        }

        // Must have at least 8 digits (without +)
        const digitsOnly = cleanPhone.replace(/\D/g, '');
        if (digitsOnly.length < 8) {
          return t.b2b?.validation?.phoneInvalid;
        }

        // Maximum 15 digits (international standard E.164)
        if (digitsOnly.length > 15) {
          return t.b2b?.validation?.phoneInvalid;
        }
        break;

      case 'acceptTerms':
        if (!value) {
          return t.b2b?.validation?.privacyRequired;
        }
        break;
    }

    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Special handling for phone field - allow only digits and +
    let processedValue = value;
    if (name === 'phone') {
      // Remove all characters except digits and +
      processedValue = value.replace(/[^\d+]/g, '');

      // Ensure + can only be at the beginning
      if (processedValue.includes('+')) {
        const plusCount = (processedValue.match(/\+/g) || []).length;
        if (plusCount > 1 || processedValue.indexOf('+') !== 0) {
          // Remove all + signs and add one at the beginning if original had it at start
          processedValue = processedValue.replace(/\+/g, '');
          if (value.trim().startsWith('+')) {
            processedValue = '+' + processedValue;
          }
        }
      }
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));

    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, processedValue);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, acceptTerms: checked }));

    if (touched.acceptTerms) {
      const error = validateField('acceptTerms', checked);
      setErrors(prev => ({ ...prev, acceptTerms: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleCheckboxBlur = () => {
    setTouched(prev => ({ ...prev, acceptTerms: true }));
    const error = validateField('acceptTerms', formData.acceptTerms);
    setErrors(prev => ({ ...prev, acceptTerms: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const fields: Array<keyof FormErrors> = [
      'companyName',
      'contactPerson',
      'email',
      'phone',
      'acceptTerms'
    ];

    fields.forEach(field => {
      const value = formData[field];
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      companyName: true,
      contactPerson: true,
      email: true,
      phone: true,
      message: true,
      acceptTerms: true
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await sendInquiry(formData);
  };

  const hasErrors = Object.values(errors).some(error => error !== undefined);

  return (
    <div className="container mx-auto pt-8 sm:pt-10 animate-fade-in">
      {/* Page Header */}
      <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-4xl mb-3 sm:mb-4">{t.b2b?.title}</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {t.b2b?.subtitle}
        </p>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 sm:mb-14 max-w-5xl mx-auto">
        <Card className="text-center border-b bg-primary-foreground">
          <CardContent className="p-6 sm:p-8 ">
            <div className=" w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building2
                className="h-7 w-7 sm:h-8 sm:w-8 text-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-2">
              {t.b2b?.benefits?.corporate?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.b2b?.benefits?.corporate?.description}
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-b bg-primary-foreground">
          <CardContent className="p-6 sm:p-8">
            <div className=" w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users
                className="h-7 w-7 sm:h-8 sm:w-8 text-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-2">
              {t.b2b?.benefits?.volume?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.b2b?.benefits?.volume?.description}
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-b bg-primary-foreground">
          <CardContent className="p-6 sm:p-8">
            <div className=" w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp
                className="h-7 w-7 sm:h-8 sm:w-8 text-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-2">
              {t.b2b?.benefits?.partners?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.b2b?.benefits?.partners?.description}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Inquiry Form */}
      <div className="max-w-xl mx-auto">
        <Card className="border-b bg-primary-foreground">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-center">
              {t.b2b?.form?.title}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-label={t.b2b?.ariaLabels?.formLabel}
              noValidate
            >
              {/* Company Name & Contact Person */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label
                    htmlFor="companyName"
                    className={
                      errors.companyName && touched.companyName
                        ? 'text-destructive'
                        : ''
                    }
                  >
                    {t.b2b?.form?.companyName}
                    <span
                      className="text-destructive ml-1"
                      aria-label="obligatorio"
                    >
                      *
                    </span>
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t.b2b?.form?.companyNamePlaceholder}
                    aria-label={t.b2b?.ariaLabels?.companyNameLabel}
                    aria-invalid={!!(errors.companyName && touched.companyName)}
                    aria-describedby={
                      errors.companyName && touched.companyName
                        ? 'companyName-error'
                        : undefined
                    }
                    className={`mt-1.5 bg-secondary/30 ${
                      errors.companyName && touched.companyName
                        ? 'border-destructive'
                        : ''
                    }`}
                    disabled={loading}
                    required
                  />
                  {errors.companyName && touched.companyName && (
                    <p
                      id="companyName-error"
                      className="text-sm text-destructive mt-1.5"
                      role="alert"
                    >
                      {errors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="contactPerson"
                    className={
                      errors.contactPerson && touched.contactPerson
                        ? 'text-destructive'
                        : ''
                    }
                  >
                    {t.b2b?.form?.contactPerson}
                    <span
                      className="text-destructive ml-1"
                      aria-label="obligatorio"
                    >
                      *
                    </span>
                  </Label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t.b2b?.form?.contactPersonPlaceholder}
                    aria-label={t.b2b?.ariaLabels?.contactPersonLabel}
                    aria-invalid={
                      !!(errors.contactPerson && touched.contactPerson)
                    }
                    aria-describedby={
                      errors.contactPerson && touched.contactPerson
                        ? 'contactPerson-error'
                        : undefined
                    }
                    className={`mt-1.5 bg-secondary/30 ${
                      errors.contactPerson && touched.contactPerson
                        ? 'border-destructive'
                        : ''
                    }`}
                    disabled={loading}
                    required
                  />
                  {errors.contactPerson && touched.contactPerson && (
                    <p
                      id="contactPerson-error"
                      className="text-sm text-destructive mt-1.5"
                      role="alert"
                    >
                      {errors.contactPerson}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label
                    htmlFor="b2bEmail"
                    className={
                      errors.email && touched.email ? 'text-destructive' : ''
                    }
                  >
                    {t.b2b?.form?.email}
                    <span
                      className="text-destructive ml-1"
                      aria-label="obligatorio"
                    >
                      *
                    </span>
                  </Label>
                  <Input
                    id="b2bEmail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t.b2b?.form?.emailPlaceholder}
                    aria-label={t.b2b?.ariaLabels?.emailLabel}
                    aria-invalid={!!(errors.email && touched.email)}
                    aria-describedby={
                      errors.email && touched.email ? 'email-error' : undefined
                    }
                    className={`mt-1.5 bg-secondary/30 ${
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
                    htmlFor="b2bPhone"
                    className={
                      errors.phone && touched.phone ? 'text-destructive' : ''
                    }
                  >
                    {t.b2b?.form?.phone}
                    <span
                      className="text-destructive ml-1"
                      aria-label="obligatorio"
                    >
                      *
                    </span>
                  </Label>
                  <Input
                    id="b2bPhone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+34600000000"
                    aria-label={t.b2b?.ariaLabels?.phoneLabel}
                    aria-invalid={!!(errors.phone && touched.phone)}
                    aria-describedby={
                      errors.phone && touched.phone ? 'phone-error' : undefined
                    }
                    className={`mt-1.5 bg-secondary/30 ${
                      errors.phone && touched.phone ? 'border-destructive' : ''
                    }`}
                    disabled={loading}
                    required
                  />
                  {errors.phone && touched.phone && (
                    <p
                      id="phone-error"
                      className="text-sm text-destructive mt-1.5"
                      role="alert"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <Label
                  htmlFor="b2bMessage"
                  className={
                    errors.message && touched.message ? 'text-destructive' : ''
                  }
                >
                  {t.b2b?.form?.message}
                </Label>
                <Textarea
                  id="b2bMessage"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t.b2b?.form?.messagePlaceholder}
                  aria-label={t.b2b?.ariaLabels?.messageLabel}
                  aria-invalid={!!(errors.message && touched.message)}
                  aria-describedby={
                    errors.message && touched.message
                      ? 'message-error'
                      : undefined
                  }
                  className={`mt-1.5 bg-secondary/30 min-h-[120px] resize-none ${
                    errors.message && touched.message
                      ? 'border-destructive'
                      : ''
                  }`}
                  disabled={loading}
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

              {/* Privacy Policy Consent */}
              <div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                    onBlur={handleCheckboxBlur}
                    className={cn(
                      errors.acceptTerms &&
                        touched.acceptTerms &&
                        'border-destructive'
                    )}
                    aria-invalid={!!(errors.acceptTerms && touched.acceptTerms)}
                    aria-describedby={
                      errors.acceptTerms && touched.acceptTerms
                        ? 'acceptTerms-error'
                        : undefined
                    }
                    disabled={loading}
                  />
                  <Label
                    htmlFor="acceptTerms"
                    className="font-normal cursor-pointer leading-tight text-sm"
                  >
                    {t.b2b?.form?.privacyConsent}{' '}
                    <Link
                      to="/privacy"
                      className="text-accent underline underline-offset-2 hover:text-accent/80"
                      target="_blank"
                    >
                      {t.b2b?.form?.privacyPolicy}
                    </Link>{' '}
                    <span className="text-destructive">*</span>
                  </Label>
                </div>
                {errors.acceptTerms && touched.acceptTerms && (
                  <p
                    id="acceptTerms-error"
                    className="text-sm text-destructive mt-1.5"
                    role="alert"
                  >
                    {errors.acceptTerms}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-2"
                disabled={loading || hasErrors}
                loading={loading}
                aria-label={t.b2b?.ariaLabels?.submitLabel}
              >
                {loading ? t.b2b?.form?.sending : t.b2b?.form?.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
