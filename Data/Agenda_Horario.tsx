import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const TimePicker: React.FC = () => {
  const [time, setTime] = React.useState<string>('');

  const availableTimes = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

  return (
    <div>
      <Select value={time} onValueChange={setTime}>
        <SelectTrigger className="w-full h-12 text-base">
          <SelectValue placeholder="Selecione um horário" />
        </SelectTrigger>
        <SelectContent>
          {availableTimes.map((t) => (
            <SelectItem key={t} value={t}>
              {t}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimePicker;
