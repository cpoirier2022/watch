// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Fox } = initSchema(schema);

export {
  Fox
};