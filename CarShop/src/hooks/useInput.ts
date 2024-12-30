import { ChangeEvent, useState } from "react";

export const useInput = (defaultValue: string) => {

    const [value, setValue] = useState<string>(defaultValue);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        setValue(e.target.value);
    }

    return {

        value,
        onChange
    }
}