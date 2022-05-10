export type Text = {
    font: Font;
    weight: Weight;
    size: Size
}

export type Font = {
    heading: string;
    body: string
}

export type Weight = {
    light: number;
    regular: number;
    bold: number
}

export type Size = {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string
}
export const text: Text = {
    font: {
        heading: '"Merriweather", Georgia, serif',
        body: '"Open Sans", Helvetica, Arial, sans-serif',
    },
    weight: {
        light: 200,
        regular: 400,
        bold: 700,
    },
    size: {
        xxs: '9px',
        xs: '10px',
        sm: '13px',
        md: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '32px',
    }
}
