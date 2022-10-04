export function ProblematicComponent() {
  // eslint-disable-next-line no-constant-condition
  if (true) throw new Error('The bomb has been planted! 💣🧨');
  else return <></>;
}
