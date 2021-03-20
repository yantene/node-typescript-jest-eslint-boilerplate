/**
 * 引数 name に対するこんにちはのあいさつの文字列を返します
 * @param name あいさつの対象者の名前
 * @return あいさつの文字列
 */
export default function hello(name: string): string {
  return `Hello, ${name}!!`
}

/**
 * 引数 name に対するさようならのあいさつの文字列を返します
 * @param name あいさつの対象者の名前
 * @return あいさつの文字列
 */
export function goodbye(name: string): string {
  return `Good bye, ${name}!!`
}
