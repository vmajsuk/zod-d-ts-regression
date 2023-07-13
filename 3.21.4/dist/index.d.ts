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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
            }>, "passthrough">, z.objectInputType<{}, z.ZodObject<{
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
            }>, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>;
}, z.ZodTypeAny, "passthrough">>;
