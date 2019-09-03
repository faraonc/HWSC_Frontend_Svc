import Vue from 'vue';

export default Vue.filter('capitalize', (value:string) : string => {
  if (!value) return '';
  const retValue = value.toString();
  return retValue.charAt(0).toUpperCase() + retValue.slice(1);
});
