// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Widget, Fox } = initSchema(schema);

export {
  Widget,
  Fox
};