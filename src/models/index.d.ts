import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FoxMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Fox {
  readonly id: string;
  readonly fid?: string | null;
  readonly name?: string | null;
  readonly src?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Fox, FoxMetaData>);
  static copyOf(source: Fox, mutator: (draft: MutableModel<Fox, FoxMetaData>) => MutableModel<Fox, FoxMetaData> | void): Fox;
}