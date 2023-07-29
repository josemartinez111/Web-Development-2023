// FILE: utils/utils.ts
// _______________________________________________

import { it } from 'node:test';

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

export const useJsonPrettyPrint = <Type>(data: { data: Type }): string => {
  return JSON.stringify(data, null, 2);
};
// _______________________________________________

export const print = <Type>(item: { data: Type }): void => {
  useFormattedOutput({ strArg: useJsonPrettyPrint(item) });
};
// _______________________________________________