import React, { useState } from 'react';
import 'flowbite/dist/flowbite.css';
import { Datepicker} from 'flowbite-react';

const DateCombobox: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <div className="w-64">
            <Datepicker
                value={selectedDate}
                onChange={handleDateChange}
                className="w-full"
            />
        </div>
    );
};

export default DateCombobox;
