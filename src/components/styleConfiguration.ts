interface StyleConfiguration {
    typography: {
        family: string;
        size: string;
        color: string;
    };
    layout: {
        containerWidth: string;
    };
    appearance: {
        backgroundColor: string;
    };
}

type DynamicStyleProperties = {
    '--font-family': StyleConfiguration['typography']['family'];
    '--font-size': StyleConfiguration['typography']['size'];
    '--font-color': StyleConfiguration['typography']['color'];
    '--container-width': StyleConfiguration['layout']['containerWidth'];
    '--bg-color': StyleConfiguration['appearance']['backgroundColor'];
} & React.CSSProperties;

export type { DynamicStyleProperties, StyleConfiguration };