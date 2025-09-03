import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DatePicker: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={`inline-flex items-center whitespace-nowrap rounded-md transition-colors 
                      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                      disabled:pointer-events-none disabled:opacity-50 border border-input 
                      bg-background shadow-sm hover:bg-accent hover:text-accent-foreground 
                      px-4 py-2 w-full justify-start text-left font-normal h-12 text-base 
                      ${!date ? 'text-muted-foreground' : ''}`}
          type="button"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP', { locale: ptBR }) : <span>Selecione uma data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;