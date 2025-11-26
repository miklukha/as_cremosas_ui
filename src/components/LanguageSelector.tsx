import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/i18n/translations';

const languages: { code: Language; name: string }[] = [
  { code: 'es', name: 'Español' },
  { code: 'gl', name: 'Galego' },
  { code: 'en', name: 'English' }
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="grow" size="icon" className="py-2">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-card"
        side="bottom"
        // sideOffset={0}
      >
        {languages.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`
              cursor-pointer transition-all duration-200 font-medium
              ${
                language === lang.code
                  ? 'bg-accent/10 text-primary'
                  : 'text-foreground/80 hover:text-foreground hover:bg-accent/5'
              }
            `}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
