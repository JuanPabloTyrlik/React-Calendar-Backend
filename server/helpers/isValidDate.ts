import moment, { MomentInput } from 'moment';

export const isValidDate = (value: unknown) => {
    if (!value && value !== 0) return false;
    const date = moment(<MomentInput>value);
    if (date.isValid()) {
        return true;
    } else {
        return false;
    }
};
