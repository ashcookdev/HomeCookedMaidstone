/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HomePageCreateFormInputValues = {
    TopSectionTitle?: string;
    TopSectionPic?: string;
    TopSectionDescription?: string;
};
export declare type HomePageCreateFormValidationValues = {
    TopSectionTitle?: ValidationFunction<string>;
    TopSectionPic?: ValidationFunction<string>;
    TopSectionDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageCreateFormOverridesProps = {
    HomePageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TopSectionTitle?: PrimitiveOverrideProps<TextFieldProps>;
    TopSectionPic?: PrimitiveOverrideProps<TextFieldProps>;
    TopSectionDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomePageCreateFormProps = React.PropsWithChildren<{
    overrides?: HomePageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HomePageCreateFormInputValues) => HomePageCreateFormInputValues;
    onSuccess?: (fields: HomePageCreateFormInputValues) => void;
    onError?: (fields: HomePageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomePageCreateFormInputValues) => HomePageCreateFormInputValues;
    onValidate?: HomePageCreateFormValidationValues;
} & React.CSSProperties>;
export default function HomePageCreateForm(props: HomePageCreateFormProps): React.ReactElement;
