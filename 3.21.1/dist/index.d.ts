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
            }>, z.objectOutputType<{}, z.ZodObject<{
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
            }>, "passthrough">, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
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
            }>, z.objectOutputType<{}, z.ZodObject<{
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
            }>, "passthrough">, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }>;
        }, z.ZodTypeAny, "passthrough">, {
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
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
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
            }>, z.objectOutputType<{}, z.ZodObject<{
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
            }>, "passthrough">, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
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
            }>, z.objectOutputType<{}, z.ZodObject<{
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
            }>, "passthrough">, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }>;
        }, z.ZodTypeAny, "passthrough">, {
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
    }, z.ZodTypeAny, "passthrough">, {
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
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
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
            }>, z.objectOutputType<{}, z.ZodObject<{
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
            }>, "passthrough">, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
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
            }>, z.objectOutputType<{}, z.ZodObject<{
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
            }>, "passthrough">, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }>;
        }, z.ZodTypeAny, "passthrough">, {
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
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
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
            }>, z.objectOutputType<{}, z.ZodObject<{
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
            }>, "passthrough">, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
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
            }>, z.objectOutputType<{}, z.ZodObject<{
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
            }>, "passthrough">, {
                [x: string]: {
                    property1: string;
                    property2: number;
                    property3: "One" | "Two" | "Three";
                };
            }>;
        }, z.ZodTypeAny, "passthrough">, {
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
    }, z.ZodTypeAny, "passthrough">, {
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
}, z.ZodTypeAny, "passthrough">, {
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
