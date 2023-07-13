import { z } from "zod";
export declare const schema: z.ZodObject<{
    some: z.ZodObject<{
        nested: z.ZodObject<{
            property: z.ZodObject<{}, "passthrough", z.ZodObject<{
                property1: z.ZodString;
                property2: z.ZodNumber;
                property3: z.ZodEnum<["One", "Two", "Three"]>;
            }, "strip", z.ZodTypeAny, {
                property1: string;
                property2: number;
                property3: "One" | "Two" | "Three";
            }, {
                property1: string;
                property2: number;
                property3: "One" | "Two" | "Three";
            }>, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }>;
        }, "passthrough", z.ZodTypeAny, {
            property: {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            };
        } & {
            [k: string]: unknown;
        }, {
            property: {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            };
        } & {
            [k: string]: unknown;
        }>;
    }, "passthrough", z.ZodTypeAny, {
        nested: {
            property: {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            };
        } & {
            [k: string]: unknown;
        };
    } & {
        [k: string]: unknown;
    }, {
        nested: {
            property: {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            };
        } & {
            [k: string]: unknown;
        };
    } & {
        [k: string]: unknown;
    }>;
}, "passthrough", z.ZodTypeAny, {
    some: {
        nested: {
            property: {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            };
        } & {
            [k: string]: unknown;
        };
    } & {
        [k: string]: unknown;
    };
} & {
    [k: string]: unknown;
}, {
    some: {
        nested: {
            property: {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            };
        } & {
            [k: string]: unknown;
        };
    } & {
        [k: string]: unknown;
    };
} & {
    [k: string]: unknown;
}>;
