// FILE: utils/utils.ts
// _______________________________________________

/**@usage
 * formattedOutput({
 *   strArg: `Data fetch took ${ seconds } seconds.`,
 *   customSpacer: "=============" // if you want to change the default space
 *  });
 * formattedOutput({
 *   strArg: `Data fetch took ${ seconds } seconds.`
 *  }); */
type FormattedOutputArgsType = {
    strArg: string,
    customSpacer?: string
};
// _______________________________________________

export const useFormattedOutput = ({
    strArg,
    customSpacer = '-'.repeat(40),
}: FormattedOutputArgsType): void => {
    console.log(customSpacer, `\n${ strArg }\n`, customSpacer);
};
// _______________________________________________

const useJsonPrettyPrint = <Type>(data: { data: Type }): string => {
    return JSON.stringify(data, null, 2);
};
// _______________________________________________