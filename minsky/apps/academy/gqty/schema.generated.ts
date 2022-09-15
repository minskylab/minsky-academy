/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO8601 Date values */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
}

export interface Academy_Packs_Project_Definition_filter {
  Academy_Packs_id?: InputMaybe<Academy_Packs_filter>;
  Project_Definition_id?: InputMaybe<Project_Definition_filter>;
  _and?: InputMaybe<Array<InputMaybe<Academy_Packs_Project_Definition_filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Academy_Packs_Project_Definition_filter>>>;
  id?: InputMaybe<number_filter_operators>;
}

export interface Academy_Packs_filter {
  _and?: InputMaybe<Array<InputMaybe<Academy_Packs_filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Academy_Packs_filter>>>;
  date_created?: InputMaybe<date_filter_operators>;
  date_created_func?: InputMaybe<datetime_function_filter_operators>;
  date_updated?: InputMaybe<date_filter_operators>;
  date_updated_func?: InputMaybe<datetime_function_filter_operators>;
  description?: InputMaybe<string_filter_operators>;
  developers?: InputMaybe<number_filter_operators>;
  hours?: InputMaybe<number_filter_operators>;
  id?: InputMaybe<string_filter_operators>;
  name?: InputMaybe<string_filter_operators>;
  price?: InputMaybe<number_filter_operators>;
  projects?: InputMaybe<Academy_Packs_Project_Definition_filter>;
  sort?: InputMaybe<number_filter_operators>;
  status?: InputMaybe<string_filter_operators>;
  user_created?: InputMaybe<string_filter_operators>;
  user_updated?: InputMaybe<string_filter_operators>;
}

export interface Project_Definition_Technical_Feature_filter {
  Project_Definition_id?: InputMaybe<Project_Definition_filter>;
  Technical_Feature_id?: InputMaybe<Technical_Feature_filter>;
  _and?: InputMaybe<
    Array<InputMaybe<Project_Definition_Technical_Feature_filter>>
  >;
  _or?: InputMaybe<
    Array<InputMaybe<Project_Definition_Technical_Feature_filter>>
  >;
  id?: InputMaybe<number_filter_operators>;
}

export interface Project_Definition_filter {
  _and?: InputMaybe<Array<InputMaybe<Project_Definition_filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Project_Definition_filter>>>;
  academy_packs?: InputMaybe<Academy_Packs_Project_Definition_filter>;
  date_created?: InputMaybe<date_filter_operators>;
  date_created_func?: InputMaybe<datetime_function_filter_operators>;
  date_updated?: InputMaybe<date_filter_operators>;
  date_updated_func?: InputMaybe<datetime_function_filter_operators>;
  description?: InputMaybe<string_filter_operators>;
  extra_features?: InputMaybe<number_filter_operators>;
  features?: InputMaybe<Project_Definition_Technical_Feature_filter>;
  id?: InputMaybe<string_filter_operators>;
  sort?: InputMaybe<number_filter_operators>;
  status?: InputMaybe<string_filter_operators>;
  user_created?: InputMaybe<string_filter_operators>;
  user_updated?: InputMaybe<string_filter_operators>;
}

export interface Skills_filter {
  _and?: InputMaybe<Array<InputMaybe<Skills_filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Skills_filter>>>;
  date_created?: InputMaybe<date_filter_operators>;
  date_created_func?: InputMaybe<datetime_function_filter_operators>;
  date_updated?: InputMaybe<date_filter_operators>;
  date_updated_func?: InputMaybe<datetime_function_filter_operators>;
  id?: InputMaybe<string_filter_operators>;
  members?: InputMaybe<members_Skills_filter>;
  name?: InputMaybe<string_filter_operators>;
  sort?: InputMaybe<number_filter_operators>;
  status?: InputMaybe<string_filter_operators>;
  technical_features?: InputMaybe<Technical_Feature_Skills_filter>;
  user_created?: InputMaybe<string_filter_operators>;
  user_updated?: InputMaybe<string_filter_operators>;
}

export interface Technical_Feature_Skills_filter {
  Skills_id?: InputMaybe<Skills_filter>;
  Technical_Feature_id?: InputMaybe<Technical_Feature_filter>;
  _and?: InputMaybe<Array<InputMaybe<Technical_Feature_Skills_filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Technical_Feature_Skills_filter>>>;
  id?: InputMaybe<number_filter_operators>;
}

export interface Technical_Feature_Technical_Feature_filter {
  Technical_Feature_id?: InputMaybe<Technical_Feature_filter>;
  _and?: InputMaybe<
    Array<InputMaybe<Technical_Feature_Technical_Feature_filter>>
  >;
  _or?: InputMaybe<
    Array<InputMaybe<Technical_Feature_Technical_Feature_filter>>
  >;
  id?: InputMaybe<number_filter_operators>;
  related_Technical_Feature_id?: InputMaybe<Technical_Feature_filter>;
}

export interface Technical_Feature_Technical_Resource_filter {
  Technical_Feature_id?: InputMaybe<Technical_Feature_filter>;
  Technical_Resource_id?: InputMaybe<Technical_Resource_filter>;
  _and?: InputMaybe<
    Array<InputMaybe<Technical_Feature_Technical_Resource_filter>>
  >;
  _or?: InputMaybe<
    Array<InputMaybe<Technical_Feature_Technical_Resource_filter>>
  >;
  id?: InputMaybe<number_filter_operators>;
}

export interface Technical_Feature_filter {
  _and?: InputMaybe<Array<InputMaybe<Technical_Feature_filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Technical_Feature_filter>>>;
  abstraction_level?: InputMaybe<number_filter_operators>;
  children?: InputMaybe<Technical_Feature_Technical_Feature_filter>;
  date_created?: InputMaybe<date_filter_operators>;
  date_created_func?: InputMaybe<datetime_function_filter_operators>;
  date_updated?: InputMaybe<date_filter_operators>;
  date_updated_func?: InputMaybe<datetime_function_filter_operators>;
  description?: InputMaybe<string_filter_operators>;
  id?: InputMaybe<string_filter_operators>;
  name?: InputMaybe<string_filter_operators>;
  parent?: InputMaybe<Technical_Feature_Technical_Feature_filter>;
  projects?: InputMaybe<Project_Definition_Technical_Feature_filter>;
  resources?: InputMaybe<Technical_Feature_Technical_Resource_filter>;
  sort?: InputMaybe<number_filter_operators>;
  status?: InputMaybe<string_filter_operators>;
  user_created?: InputMaybe<string_filter_operators>;
  user_updated?: InputMaybe<string_filter_operators>;
}

export interface Technical_Resource_filter {
  _and?: InputMaybe<Array<InputMaybe<Technical_Resource_filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Technical_Resource_filter>>>;
  date_created?: InputMaybe<date_filter_operators>;
  date_created_func?: InputMaybe<datetime_function_filter_operators>;
  date_updated?: InputMaybe<date_filter_operators>;
  date_updated_func?: InputMaybe<datetime_function_filter_operators>;
  description?: InputMaybe<string_filter_operators>;
  id?: InputMaybe<string_filter_operators>;
  name?: InputMaybe<string_filter_operators>;
  skills?: InputMaybe<string_filter_operators>;
  sort?: InputMaybe<number_filter_operators>;
  status?: InputMaybe<string_filter_operators>;
  user_created?: InputMaybe<string_filter_operators>;
  user_updated?: InputMaybe<string_filter_operators>;
}

export interface date_filter_operators {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
}

export interface datetime_function_filter_operators {
  day?: InputMaybe<number_filter_operators>;
  hour?: InputMaybe<number_filter_operators>;
  minute?: InputMaybe<number_filter_operators>;
  month?: InputMaybe<number_filter_operators>;
  second?: InputMaybe<number_filter_operators>;
  week?: InputMaybe<number_filter_operators>;
  weekday?: InputMaybe<number_filter_operators>;
  year?: InputMaybe<number_filter_operators>;
}

export interface members_Skills_filter {
  Skills_id?: InputMaybe<Skills_filter>;
  _and?: InputMaybe<Array<InputMaybe<members_Skills_filter>>>;
  _or?: InputMaybe<Array<InputMaybe<members_Skills_filter>>>;
  id?: InputMaybe<number_filter_operators>;
  members_id?: InputMaybe<members_filter>;
}

export interface members_filter {
  _and?: InputMaybe<Array<InputMaybe<members_filter>>>;
  _or?: InputMaybe<Array<InputMaybe<members_filter>>>;
  birthday?: InputMaybe<date_filter_operators>;
  birthday_func?: InputMaybe<datetime_function_filter_operators>;
  date_created?: InputMaybe<date_filter_operators>;
  date_created_func?: InputMaybe<datetime_function_filter_operators>;
  date_updated?: InputMaybe<date_filter_operators>;
  date_updated_func?: InputMaybe<datetime_function_filter_operators>;
  email?: InputMaybe<string_filter_operators>;
  id?: InputMaybe<string_filter_operators>;
  name?: InputMaybe<string_filter_operators>;
  skills?: InputMaybe<members_Skills_filter>;
  sort?: InputMaybe<number_filter_operators>;
  user_created?: InputMaybe<string_filter_operators>;
  user_updated?: InputMaybe<string_filter_operators>;
}

export interface number_filter_operators {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
}

export interface string_filter_operators {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
}

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
  Boolean: true,
  Date: true,
  Float: true,
  ID: true,
  Int: true,
  JSON: true,
  String: true,
};
export const generatedSchema = {
  Academy_Packs: {
    __typename: { __type: 'String!' },
    date_created: { __type: 'Date' },
    date_created_func: { __type: 'datetime_functions' },
    date_updated: { __type: 'Date' },
    date_updated_func: { __type: 'datetime_functions' },
    description: { __type: 'String' },
    developers: { __type: 'Int' },
    hours: { __type: 'Int' },
    id: { __type: 'ID' },
    name: { __type: 'String' },
    price: { __type: 'Float' },
    projects: {
      __type: '[Academy_Packs_Project_Definition]',
      __args: {
        filter: 'Academy_Packs_Project_Definition_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    sort: { __type: 'Int' },
    status: { __type: 'String!' },
    user_created: { __type: 'String' },
    user_updated: { __type: 'String' },
  },
  Academy_Packs_Project_Definition: {
    __typename: { __type: 'String!' },
    Academy_Packs_id: {
      __type: 'Academy_Packs',
      __args: {
        filter: 'Academy_Packs_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Project_Definition_id: {
      __type: 'Project_Definition',
      __args: {
        filter: 'Project_Definition_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    id: { __type: 'ID' },
  },
  Academy_Packs_Project_Definition_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Academy_Packs_Project_Definition_aggregated_fields' },
    avgDistinct: {
      __type: 'Academy_Packs_Project_Definition_aggregated_fields',
    },
    count: { __type: 'Academy_Packs_Project_Definition_aggregated_fields' },
    countDistinct: {
      __type: 'Academy_Packs_Project_Definition_aggregated_fields',
    },
    group: { __type: 'JSON' },
    max: { __type: 'Academy_Packs_Project_Definition_aggregated_fields' },
    min: { __type: 'Academy_Packs_Project_Definition_aggregated_fields' },
    sum: { __type: 'Academy_Packs_Project_Definition_aggregated_fields' },
    sumDistinct: {
      __type: 'Academy_Packs_Project_Definition_aggregated_fields',
    },
  },
  Academy_Packs_Project_Definition_aggregated_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  Academy_Packs_Project_Definition_filter: {
    Academy_Packs_id: { __type: 'Academy_Packs_filter' },
    Project_Definition_id: { __type: 'Project_Definition_filter' },
    _and: { __type: '[Academy_Packs_Project_Definition_filter]' },
    _or: { __type: '[Academy_Packs_Project_Definition_filter]' },
    id: { __type: 'number_filter_operators' },
  },
  Academy_Packs_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Academy_Packs_aggregated_fields' },
    avgDistinct: { __type: 'Academy_Packs_aggregated_fields' },
    count: { __type: 'Academy_Packs_aggregated_fields' },
    countDistinct: { __type: 'Academy_Packs_aggregated_fields' },
    group: { __type: 'JSON' },
    max: { __type: 'Academy_Packs_aggregated_fields' },
    min: { __type: 'Academy_Packs_aggregated_fields' },
    sum: { __type: 'Academy_Packs_aggregated_fields' },
    sumDistinct: { __type: 'Academy_Packs_aggregated_fields' },
  },
  Academy_Packs_aggregated_fields: {
    __typename: { __type: 'String!' },
    developers: { __type: 'Float' },
    hours: { __type: 'Float' },
    price: { __type: 'Float' },
    sort: { __type: 'Float' },
  },
  Academy_Packs_filter: {
    _and: { __type: '[Academy_Packs_filter]' },
    _or: { __type: '[Academy_Packs_filter]' },
    date_created: { __type: 'date_filter_operators' },
    date_created_func: { __type: 'datetime_function_filter_operators' },
    date_updated: { __type: 'date_filter_operators' },
    date_updated_func: { __type: 'datetime_function_filter_operators' },
    description: { __type: 'string_filter_operators' },
    developers: { __type: 'number_filter_operators' },
    hours: { __type: 'number_filter_operators' },
    id: { __type: 'string_filter_operators' },
    name: { __type: 'string_filter_operators' },
    price: { __type: 'number_filter_operators' },
    projects: { __type: 'Academy_Packs_Project_Definition_filter' },
    sort: { __type: 'number_filter_operators' },
    status: { __type: 'string_filter_operators' },
    user_created: { __type: 'string_filter_operators' },
    user_updated: { __type: 'string_filter_operators' },
  },
  Project_Definition: {
    __typename: { __type: 'String!' },
    academy_packs: {
      __type: '[Academy_Packs_Project_Definition]',
      __args: {
        filter: 'Academy_Packs_Project_Definition_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    date_created: { __type: 'Date' },
    date_created_func: { __type: 'datetime_functions' },
    date_updated: { __type: 'Date' },
    date_updated_func: { __type: 'datetime_functions' },
    description: { __type: 'String' },
    extra_features: { __type: 'Int' },
    features: {
      __type: '[Project_Definition_Technical_Feature]',
      __args: {
        filter: 'Project_Definition_Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    id: { __type: 'ID' },
    sort: { __type: 'Int' },
    status: { __type: 'String!' },
    user_created: { __type: 'String' },
    user_updated: { __type: 'String' },
  },
  Project_Definition_Technical_Feature: {
    __typename: { __type: 'String!' },
    Project_Definition_id: {
      __type: 'Project_Definition',
      __args: {
        filter: 'Project_Definition_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_id: {
      __type: 'Technical_Feature',
      __args: {
        filter: 'Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    id: { __type: 'ID' },
  },
  Project_Definition_Technical_Feature_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Project_Definition_Technical_Feature_aggregated_fields' },
    avgDistinct: {
      __type: 'Project_Definition_Technical_Feature_aggregated_fields',
    },
    count: { __type: 'Project_Definition_Technical_Feature_aggregated_fields' },
    countDistinct: {
      __type: 'Project_Definition_Technical_Feature_aggregated_fields',
    },
    group: { __type: 'JSON' },
    max: { __type: 'Project_Definition_Technical_Feature_aggregated_fields' },
    min: { __type: 'Project_Definition_Technical_Feature_aggregated_fields' },
    sum: { __type: 'Project_Definition_Technical_Feature_aggregated_fields' },
    sumDistinct: {
      __type: 'Project_Definition_Technical_Feature_aggregated_fields',
    },
  },
  Project_Definition_Technical_Feature_aggregated_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  Project_Definition_Technical_Feature_filter: {
    Project_Definition_id: { __type: 'Project_Definition_filter' },
    Technical_Feature_id: { __type: 'Technical_Feature_filter' },
    _and: { __type: '[Project_Definition_Technical_Feature_filter]' },
    _or: { __type: '[Project_Definition_Technical_Feature_filter]' },
    id: { __type: 'number_filter_operators' },
  },
  Project_Definition_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Project_Definition_aggregated_fields' },
    avgDistinct: { __type: 'Project_Definition_aggregated_fields' },
    count: { __type: 'Project_Definition_aggregated_fields' },
    countDistinct: { __type: 'Project_Definition_aggregated_fields' },
    group: { __type: 'JSON' },
    max: { __type: 'Project_Definition_aggregated_fields' },
    min: { __type: 'Project_Definition_aggregated_fields' },
    sum: { __type: 'Project_Definition_aggregated_fields' },
    sumDistinct: { __type: 'Project_Definition_aggregated_fields' },
  },
  Project_Definition_aggregated_fields: {
    __typename: { __type: 'String!' },
    extra_features: { __type: 'Float' },
    sort: { __type: 'Float' },
  },
  Project_Definition_filter: {
    _and: { __type: '[Project_Definition_filter]' },
    _or: { __type: '[Project_Definition_filter]' },
    academy_packs: { __type: 'Academy_Packs_Project_Definition_filter' },
    date_created: { __type: 'date_filter_operators' },
    date_created_func: { __type: 'datetime_function_filter_operators' },
    date_updated: { __type: 'date_filter_operators' },
    date_updated_func: { __type: 'datetime_function_filter_operators' },
    description: { __type: 'string_filter_operators' },
    extra_features: { __type: 'number_filter_operators' },
    features: { __type: 'Project_Definition_Technical_Feature_filter' },
    id: { __type: 'string_filter_operators' },
    sort: { __type: 'number_filter_operators' },
    status: { __type: 'string_filter_operators' },
    user_created: { __type: 'string_filter_operators' },
    user_updated: { __type: 'string_filter_operators' },
  },
  Skills: {
    __typename: { __type: 'String!' },
    date_created: { __type: 'Date' },
    date_created_func: { __type: 'datetime_functions' },
    date_updated: { __type: 'Date' },
    date_updated_func: { __type: 'datetime_functions' },
    id: { __type: 'ID' },
    members: {
      __type: '[members_Skills]',
      __args: {
        filter: 'members_Skills_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    name: { __type: 'String' },
    sort: { __type: 'Int' },
    status: { __type: 'String!' },
    technical_features: {
      __type: '[Technical_Feature_Skills]',
      __args: {
        filter: 'Technical_Feature_Skills_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    user_created: { __type: 'String' },
    user_updated: { __type: 'String' },
  },
  Skills_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Skills_aggregated_fields' },
    avgDistinct: { __type: 'Skills_aggregated_fields' },
    count: { __type: 'Skills_aggregated_fields' },
    countDistinct: { __type: 'Skills_aggregated_fields' },
    group: { __type: 'JSON' },
    max: { __type: 'Skills_aggregated_fields' },
    min: { __type: 'Skills_aggregated_fields' },
    sum: { __type: 'Skills_aggregated_fields' },
    sumDistinct: { __type: 'Skills_aggregated_fields' },
  },
  Skills_aggregated_fields: {
    __typename: { __type: 'String!' },
    sort: { __type: 'Float' },
  },
  Skills_filter: {
    _and: { __type: '[Skills_filter]' },
    _or: { __type: '[Skills_filter]' },
    date_created: { __type: 'date_filter_operators' },
    date_created_func: { __type: 'datetime_function_filter_operators' },
    date_updated: { __type: 'date_filter_operators' },
    date_updated_func: { __type: 'datetime_function_filter_operators' },
    id: { __type: 'string_filter_operators' },
    members: { __type: 'members_Skills_filter' },
    name: { __type: 'string_filter_operators' },
    sort: { __type: 'number_filter_operators' },
    status: { __type: 'string_filter_operators' },
    technical_features: { __type: 'Technical_Feature_Skills_filter' },
    user_created: { __type: 'string_filter_operators' },
    user_updated: { __type: 'string_filter_operators' },
  },
  Technical_Feature: {
    __typename: { __type: 'String!' },
    abstraction_level: { __type: 'Float' },
    children: {
      __type: '[Technical_Feature_Technical_Feature]',
      __args: {
        filter: 'Technical_Feature_Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    date_created: { __type: 'Date' },
    date_created_func: { __type: 'datetime_functions' },
    date_updated: { __type: 'Date' },
    date_updated_func: { __type: 'datetime_functions' },
    description: { __type: 'String' },
    id: { __type: 'ID' },
    name: { __type: 'String' },
    parent: {
      __type: '[Technical_Feature_Technical_Feature]',
      __args: {
        filter: 'Technical_Feature_Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    projects: {
      __type: '[Project_Definition_Technical_Feature]',
      __args: {
        filter: 'Project_Definition_Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    resources: {
      __type: '[Technical_Feature_Technical_Resource]',
      __args: {
        filter: 'Technical_Feature_Technical_Resource_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    sort: { __type: 'Int' },
    status: { __type: 'String!' },
    user_created: { __type: 'String' },
    user_updated: { __type: 'String' },
  },
  Technical_Feature_Skills: {
    __typename: { __type: 'String!' },
    Skills_id: {
      __type: 'Skills',
      __args: {
        filter: 'Skills_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_id: {
      __type: 'Technical_Feature',
      __args: {
        filter: 'Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    id: { __type: 'ID' },
  },
  Technical_Feature_Skills_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Technical_Feature_Skills_aggregated_fields' },
    avgDistinct: { __type: 'Technical_Feature_Skills_aggregated_fields' },
    count: { __type: 'Technical_Feature_Skills_aggregated_fields' },
    countDistinct: { __type: 'Technical_Feature_Skills_aggregated_fields' },
    group: { __type: 'JSON' },
    max: { __type: 'Technical_Feature_Skills_aggregated_fields' },
    min: { __type: 'Technical_Feature_Skills_aggregated_fields' },
    sum: { __type: 'Technical_Feature_Skills_aggregated_fields' },
    sumDistinct: { __type: 'Technical_Feature_Skills_aggregated_fields' },
  },
  Technical_Feature_Skills_aggregated_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  Technical_Feature_Skills_filter: {
    Skills_id: { __type: 'Skills_filter' },
    Technical_Feature_id: { __type: 'Technical_Feature_filter' },
    _and: { __type: '[Technical_Feature_Skills_filter]' },
    _or: { __type: '[Technical_Feature_Skills_filter]' },
    id: { __type: 'number_filter_operators' },
  },
  Technical_Feature_Technical_Feature: {
    __typename: { __type: 'String!' },
    Technical_Feature_id: {
      __type: 'Technical_Feature',
      __args: {
        filter: 'Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    id: { __type: 'ID' },
    related_Technical_Feature_id: {
      __type: 'Technical_Feature',
      __args: {
        filter: 'Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
  },
  Technical_Feature_Technical_Feature_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Technical_Feature_Technical_Feature_aggregated_fields' },
    avgDistinct: {
      __type: 'Technical_Feature_Technical_Feature_aggregated_fields',
    },
    count: { __type: 'Technical_Feature_Technical_Feature_aggregated_fields' },
    countDistinct: {
      __type: 'Technical_Feature_Technical_Feature_aggregated_fields',
    },
    group: { __type: 'JSON' },
    max: { __type: 'Technical_Feature_Technical_Feature_aggregated_fields' },
    min: { __type: 'Technical_Feature_Technical_Feature_aggregated_fields' },
    sum: { __type: 'Technical_Feature_Technical_Feature_aggregated_fields' },
    sumDistinct: {
      __type: 'Technical_Feature_Technical_Feature_aggregated_fields',
    },
  },
  Technical_Feature_Technical_Feature_aggregated_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  Technical_Feature_Technical_Feature_filter: {
    Technical_Feature_id: { __type: 'Technical_Feature_filter' },
    _and: { __type: '[Technical_Feature_Technical_Feature_filter]' },
    _or: { __type: '[Technical_Feature_Technical_Feature_filter]' },
    id: { __type: 'number_filter_operators' },
    related_Technical_Feature_id: { __type: 'Technical_Feature_filter' },
  },
  Technical_Feature_Technical_Resource: {
    __typename: { __type: 'String!' },
    Technical_Feature_id: {
      __type: 'Technical_Feature',
      __args: {
        filter: 'Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Resource_id: {
      __type: 'Technical_Resource',
      __args: {
        filter: 'Technical_Resource_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    id: { __type: 'ID' },
  },
  Technical_Feature_Technical_Resource_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Technical_Feature_Technical_Resource_aggregated_fields' },
    avgDistinct: {
      __type: 'Technical_Feature_Technical_Resource_aggregated_fields',
    },
    count: { __type: 'Technical_Feature_Technical_Resource_aggregated_fields' },
    countDistinct: {
      __type: 'Technical_Feature_Technical_Resource_aggregated_fields',
    },
    group: { __type: 'JSON' },
    max: { __type: 'Technical_Feature_Technical_Resource_aggregated_fields' },
    min: { __type: 'Technical_Feature_Technical_Resource_aggregated_fields' },
    sum: { __type: 'Technical_Feature_Technical_Resource_aggregated_fields' },
    sumDistinct: {
      __type: 'Technical_Feature_Technical_Resource_aggregated_fields',
    },
  },
  Technical_Feature_Technical_Resource_aggregated_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  Technical_Feature_Technical_Resource_filter: {
    Technical_Feature_id: { __type: 'Technical_Feature_filter' },
    Technical_Resource_id: { __type: 'Technical_Resource_filter' },
    _and: { __type: '[Technical_Feature_Technical_Resource_filter]' },
    _or: { __type: '[Technical_Feature_Technical_Resource_filter]' },
    id: { __type: 'number_filter_operators' },
  },
  Technical_Feature_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Technical_Feature_aggregated_fields' },
    avgDistinct: { __type: 'Technical_Feature_aggregated_fields' },
    count: { __type: 'Technical_Feature_aggregated_fields' },
    countDistinct: { __type: 'Technical_Feature_aggregated_fields' },
    group: { __type: 'JSON' },
    max: { __type: 'Technical_Feature_aggregated_fields' },
    min: { __type: 'Technical_Feature_aggregated_fields' },
    sum: { __type: 'Technical_Feature_aggregated_fields' },
    sumDistinct: { __type: 'Technical_Feature_aggregated_fields' },
  },
  Technical_Feature_aggregated_fields: {
    __typename: { __type: 'String!' },
    abstraction_level: { __type: 'Float' },
    sort: { __type: 'Float' },
  },
  Technical_Feature_filter: {
    _and: { __type: '[Technical_Feature_filter]' },
    _or: { __type: '[Technical_Feature_filter]' },
    abstraction_level: { __type: 'number_filter_operators' },
    children: { __type: 'Technical_Feature_Technical_Feature_filter' },
    date_created: { __type: 'date_filter_operators' },
    date_created_func: { __type: 'datetime_function_filter_operators' },
    date_updated: { __type: 'date_filter_operators' },
    date_updated_func: { __type: 'datetime_function_filter_operators' },
    description: { __type: 'string_filter_operators' },
    id: { __type: 'string_filter_operators' },
    name: { __type: 'string_filter_operators' },
    parent: { __type: 'Technical_Feature_Technical_Feature_filter' },
    projects: { __type: 'Project_Definition_Technical_Feature_filter' },
    resources: { __type: 'Technical_Feature_Technical_Resource_filter' },
    sort: { __type: 'number_filter_operators' },
    status: { __type: 'string_filter_operators' },
    user_created: { __type: 'string_filter_operators' },
    user_updated: { __type: 'string_filter_operators' },
  },
  Technical_Resource: {
    __typename: { __type: 'String!' },
    date_created: { __type: 'Date' },
    date_created_func: { __type: 'datetime_functions' },
    date_updated: { __type: 'Date' },
    date_updated_func: { __type: 'datetime_functions' },
    description: { __type: 'String' },
    id: { __type: 'ID' },
    name: { __type: 'String' },
    skills: { __type: 'String' },
    sort: { __type: 'Int' },
    status: { __type: 'String!' },
    user_created: { __type: 'String' },
    user_updated: { __type: 'String' },
  },
  Technical_Resource_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'Technical_Resource_aggregated_fields' },
    avgDistinct: { __type: 'Technical_Resource_aggregated_fields' },
    count: { __type: 'Technical_Resource_aggregated_fields' },
    countDistinct: { __type: 'Technical_Resource_aggregated_fields' },
    group: { __type: 'JSON' },
    max: { __type: 'Technical_Resource_aggregated_fields' },
    min: { __type: 'Technical_Resource_aggregated_fields' },
    sum: { __type: 'Technical_Resource_aggregated_fields' },
    sumDistinct: { __type: 'Technical_Resource_aggregated_fields' },
  },
  Technical_Resource_aggregated_fields: {
    __typename: { __type: 'String!' },
    sort: { __type: 'Float' },
  },
  Technical_Resource_filter: {
    _and: { __type: '[Technical_Resource_filter]' },
    _or: { __type: '[Technical_Resource_filter]' },
    date_created: { __type: 'date_filter_operators' },
    date_created_func: { __type: 'datetime_function_filter_operators' },
    date_updated: { __type: 'date_filter_operators' },
    date_updated_func: { __type: 'datetime_function_filter_operators' },
    description: { __type: 'string_filter_operators' },
    id: { __type: 'string_filter_operators' },
    name: { __type: 'string_filter_operators' },
    skills: { __type: 'string_filter_operators' },
    sort: { __type: 'number_filter_operators' },
    status: { __type: 'string_filter_operators' },
    user_created: { __type: 'string_filter_operators' },
    user_updated: { __type: 'string_filter_operators' },
  },
  date_filter_operators: {
    _eq: { __type: 'String' },
    _gt: { __type: 'String' },
    _gte: { __type: 'String' },
    _lt: { __type: 'String' },
    _lte: { __type: 'String' },
    _neq: { __type: 'String' },
    _nnull: { __type: 'Boolean' },
    _null: { __type: 'Boolean' },
  },
  datetime_function_filter_operators: {
    day: { __type: 'number_filter_operators' },
    hour: { __type: 'number_filter_operators' },
    minute: { __type: 'number_filter_operators' },
    month: { __type: 'number_filter_operators' },
    second: { __type: 'number_filter_operators' },
    week: { __type: 'number_filter_operators' },
    weekday: { __type: 'number_filter_operators' },
    year: { __type: 'number_filter_operators' },
  },
  datetime_functions: {
    __typename: { __type: 'String!' },
    day: { __type: 'Int' },
    hour: { __type: 'Int' },
    minute: { __type: 'Int' },
    month: { __type: 'Int' },
    second: { __type: 'Int' },
    week: { __type: 'Int' },
    weekday: { __type: 'Int' },
    year: { __type: 'Int' },
  },
  members: {
    __typename: { __type: 'String!' },
    birthday: { __type: 'Date' },
    birthday_func: { __type: 'datetime_functions' },
    date_created: { __type: 'Date' },
    date_created_func: { __type: 'datetime_functions' },
    date_updated: { __type: 'Date' },
    date_updated_func: { __type: 'datetime_functions' },
    email: { __type: 'String' },
    id: { __type: 'ID' },
    name: { __type: 'String' },
    skills: {
      __type: '[members_Skills]',
      __args: {
        filter: 'members_Skills_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    sort: { __type: 'Int' },
    user_created: { __type: 'String' },
    user_updated: { __type: 'String' },
  },
  members_Skills: {
    __typename: { __type: 'String!' },
    Skills_id: {
      __type: 'Skills',
      __args: {
        filter: 'Skills_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    id: { __type: 'ID' },
    members_id: {
      __type: 'members',
      __args: {
        filter: 'members_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
  },
  members_Skills_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'members_Skills_aggregated_fields' },
    avgDistinct: { __type: 'members_Skills_aggregated_fields' },
    count: { __type: 'members_Skills_aggregated_fields' },
    countDistinct: { __type: 'members_Skills_aggregated_fields' },
    group: { __type: 'JSON' },
    max: { __type: 'members_Skills_aggregated_fields' },
    min: { __type: 'members_Skills_aggregated_fields' },
    sum: { __type: 'members_Skills_aggregated_fields' },
    sumDistinct: { __type: 'members_Skills_aggregated_fields' },
  },
  members_Skills_aggregated_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  members_Skills_filter: {
    Skills_id: { __type: 'Skills_filter' },
    _and: { __type: '[members_Skills_filter]' },
    _or: { __type: '[members_Skills_filter]' },
    id: { __type: 'number_filter_operators' },
    members_id: { __type: 'members_filter' },
  },
  members_aggregated: {
    __typename: { __type: 'String!' },
    avg: { __type: 'members_aggregated_fields' },
    avgDistinct: { __type: 'members_aggregated_fields' },
    count: { __type: 'members_aggregated_fields' },
    countDistinct: { __type: 'members_aggregated_fields' },
    group: { __type: 'JSON' },
    max: { __type: 'members_aggregated_fields' },
    min: { __type: 'members_aggregated_fields' },
    sum: { __type: 'members_aggregated_fields' },
    sumDistinct: { __type: 'members_aggregated_fields' },
  },
  members_aggregated_fields: {
    __typename: { __type: 'String!' },
    sort: { __type: 'Float' },
  },
  members_filter: {
    _and: { __type: '[members_filter]' },
    _or: { __type: '[members_filter]' },
    birthday: { __type: 'date_filter_operators' },
    birthday_func: { __type: 'datetime_function_filter_operators' },
    date_created: { __type: 'date_filter_operators' },
    date_created_func: { __type: 'datetime_function_filter_operators' },
    date_updated: { __type: 'date_filter_operators' },
    date_updated_func: { __type: 'datetime_function_filter_operators' },
    email: { __type: 'string_filter_operators' },
    id: { __type: 'string_filter_operators' },
    name: { __type: 'string_filter_operators' },
    skills: { __type: 'members_Skills_filter' },
    sort: { __type: 'number_filter_operators' },
    user_created: { __type: 'string_filter_operators' },
    user_updated: { __type: 'string_filter_operators' },
  },
  mutation: {},
  number_filter_operators: {
    _eq: { __type: 'Float' },
    _gt: { __type: 'Float' },
    _gte: { __type: 'Float' },
    _in: { __type: '[Float]' },
    _lt: { __type: 'Float' },
    _lte: { __type: 'Float' },
    _neq: { __type: 'Float' },
    _nin: { __type: '[Float]' },
    _nnull: { __type: 'Boolean' },
    _null: { __type: 'Boolean' },
  },
  query: {
    __typename: { __type: 'String!' },
    Academy_Packs: {
      __type: '[Academy_Packs]',
      __args: {
        filter: 'Academy_Packs_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Academy_Packs_Project_Definition: {
      __type: '[Academy_Packs_Project_Definition]',
      __args: {
        filter: 'Academy_Packs_Project_Definition_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Academy_Packs_Project_Definition_aggregated: {
      __type: '[Academy_Packs_Project_Definition_aggregated]',
      __args: {
        filter: 'Academy_Packs_Project_Definition_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Academy_Packs_Project_Definition_by_id: {
      __type: 'Academy_Packs_Project_Definition',
      __args: { id: 'ID!' },
    },
    Academy_Packs_aggregated: {
      __type: '[Academy_Packs_aggregated]',
      __args: {
        filter: 'Academy_Packs_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Academy_Packs_by_id: { __type: 'Academy_Packs', __args: { id: 'ID!' } },
    Project_Definition: {
      __type: '[Project_Definition]',
      __args: {
        filter: 'Project_Definition_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Project_Definition_Technical_Feature: {
      __type: '[Project_Definition_Technical_Feature]',
      __args: {
        filter: 'Project_Definition_Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Project_Definition_Technical_Feature_aggregated: {
      __type: '[Project_Definition_Technical_Feature_aggregated]',
      __args: {
        filter: 'Project_Definition_Technical_Feature_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Project_Definition_Technical_Feature_by_id: {
      __type: 'Project_Definition_Technical_Feature',
      __args: { id: 'ID!' },
    },
    Project_Definition_aggregated: {
      __type: '[Project_Definition_aggregated]',
      __args: {
        filter: 'Project_Definition_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Project_Definition_by_id: {
      __type: 'Project_Definition',
      __args: { id: 'ID!' },
    },
    Skills: {
      __type: '[Skills]',
      __args: {
        filter: 'Skills_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Skills_aggregated: {
      __type: '[Skills_aggregated]',
      __args: {
        filter: 'Skills_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Skills_by_id: { __type: 'Skills', __args: { id: 'ID!' } },
    Technical_Feature: {
      __type: '[Technical_Feature]',
      __args: {
        filter: 'Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_Skills: {
      __type: '[Technical_Feature_Skills]',
      __args: {
        filter: 'Technical_Feature_Skills_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_Skills_aggregated: {
      __type: '[Technical_Feature_Skills_aggregated]',
      __args: {
        filter: 'Technical_Feature_Skills_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_Skills_by_id: {
      __type: 'Technical_Feature_Skills',
      __args: { id: 'ID!' },
    },
    Technical_Feature_Technical_Feature: {
      __type: '[Technical_Feature_Technical_Feature]',
      __args: {
        filter: 'Technical_Feature_Technical_Feature_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_Technical_Feature_aggregated: {
      __type: '[Technical_Feature_Technical_Feature_aggregated]',
      __args: {
        filter: 'Technical_Feature_Technical_Feature_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_Technical_Feature_by_id: {
      __type: 'Technical_Feature_Technical_Feature',
      __args: { id: 'ID!' },
    },
    Technical_Feature_Technical_Resource: {
      __type: '[Technical_Feature_Technical_Resource]',
      __args: {
        filter: 'Technical_Feature_Technical_Resource_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_Technical_Resource_aggregated: {
      __type: '[Technical_Feature_Technical_Resource_aggregated]',
      __args: {
        filter: 'Technical_Feature_Technical_Resource_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_Technical_Resource_by_id: {
      __type: 'Technical_Feature_Technical_Resource',
      __args: { id: 'ID!' },
    },
    Technical_Feature_aggregated: {
      __type: '[Technical_Feature_aggregated]',
      __args: {
        filter: 'Technical_Feature_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Feature_by_id: {
      __type: 'Technical_Feature',
      __args: { id: 'ID!' },
    },
    Technical_Resource: {
      __type: '[Technical_Resource]',
      __args: {
        filter: 'Technical_Resource_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Resource_aggregated: {
      __type: '[Technical_Resource_aggregated]',
      __args: {
        filter: 'Technical_Resource_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    Technical_Resource_by_id: {
      __type: 'Technical_Resource',
      __args: { id: 'ID!' },
    },
    members: {
      __type: '[members]',
      __args: {
        filter: 'members_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    members_Skills: {
      __type: '[members_Skills]',
      __args: {
        filter: 'members_Skills_filter',
        limit: 'Int',
        offset: 'Int',
        page: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    members_Skills_aggregated: {
      __type: '[members_Skills_aggregated]',
      __args: {
        filter: 'members_Skills_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    members_Skills_by_id: { __type: 'members_Skills', __args: { id: 'ID!' } },
    members_aggregated: {
      __type: '[members_aggregated]',
      __args: {
        filter: 'members_filter',
        groupBy: '[String]',
        limit: 'Int',
        search: 'String',
        sort: '[String]',
      },
    },
    members_by_id: { __type: 'members', __args: { id: 'ID!' } },
  },
  string_filter_operators: {
    _contains: { __type: 'String' },
    _empty: { __type: 'Boolean' },
    _ends_with: { __type: 'String' },
    _eq: { __type: 'String' },
    _in: { __type: '[String]' },
    _ncontains: { __type: 'String' },
    _nempty: { __type: 'Boolean' },
    _nends_with: { __type: 'String' },
    _neq: { __type: 'String' },
    _nin: { __type: '[String]' },
    _nnull: { __type: 'Boolean' },
    _nstarts_with: { __type: 'String' },
    _null: { __type: 'Boolean' },
    _starts_with: { __type: 'String' },
  },
  subscription: {},
} as const;

export interface Academy_Packs {
  __typename?: 'Academy_Packs';
  date_created?: Maybe<ScalarsEnums['Date']>;
  date_created_func?: Maybe<datetime_functions>;
  date_updated?: Maybe<ScalarsEnums['Date']>;
  date_updated_func?: Maybe<datetime_functions>;
  description?: Maybe<ScalarsEnums['String']>;
  developers?: Maybe<ScalarsEnums['Int']>;
  hours?: Maybe<ScalarsEnums['Int']>;
  id?: Maybe<ScalarsEnums['ID']>;
  name?: Maybe<ScalarsEnums['String']>;
  price?: Maybe<ScalarsEnums['Float']>;
  projects: (args?: {
    filter?: Maybe<Academy_Packs_Project_Definition_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Academy_Packs_Project_Definition>>>;
  sort?: Maybe<ScalarsEnums['Int']>;
  status: ScalarsEnums['String'];
  user_created?: Maybe<ScalarsEnums['String']>;
  user_updated?: Maybe<ScalarsEnums['String']>;
}

export interface Academy_Packs_Project_Definition {
  __typename?: 'Academy_Packs_Project_Definition';
  Academy_Packs_id: (args?: {
    filter?: Maybe<Academy_Packs_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Academy_Packs>;
  Project_Definition_id: (args?: {
    filter?: Maybe<Project_Definition_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Project_Definition>;
  id?: Maybe<ScalarsEnums['ID']>;
}

export interface Academy_Packs_Project_Definition_aggregated {
  __typename?: 'Academy_Packs_Project_Definition_aggregated';
  avg?: Maybe<Academy_Packs_Project_Definition_aggregated_fields>;
  avgDistinct?: Maybe<Academy_Packs_Project_Definition_aggregated_fields>;
  count?: Maybe<Academy_Packs_Project_Definition_aggregated_fields>;
  countDistinct?: Maybe<Academy_Packs_Project_Definition_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Academy_Packs_Project_Definition_aggregated_fields>;
  min?: Maybe<Academy_Packs_Project_Definition_aggregated_fields>;
  sum?: Maybe<Academy_Packs_Project_Definition_aggregated_fields>;
  sumDistinct?: Maybe<Academy_Packs_Project_Definition_aggregated_fields>;
}

export interface Academy_Packs_Project_Definition_aggregated_fields {
  __typename?: 'Academy_Packs_Project_Definition_aggregated_fields';
  id?: Maybe<ScalarsEnums['Float']>;
}

export interface Academy_Packs_aggregated {
  __typename?: 'Academy_Packs_aggregated';
  avg?: Maybe<Academy_Packs_aggregated_fields>;
  avgDistinct?: Maybe<Academy_Packs_aggregated_fields>;
  count?: Maybe<Academy_Packs_aggregated_fields>;
  countDistinct?: Maybe<Academy_Packs_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Academy_Packs_aggregated_fields>;
  min?: Maybe<Academy_Packs_aggregated_fields>;
  sum?: Maybe<Academy_Packs_aggregated_fields>;
  sumDistinct?: Maybe<Academy_Packs_aggregated_fields>;
}

export interface Academy_Packs_aggregated_fields {
  __typename?: 'Academy_Packs_aggregated_fields';
  developers?: Maybe<ScalarsEnums['Float']>;
  hours?: Maybe<ScalarsEnums['Float']>;
  price?: Maybe<ScalarsEnums['Float']>;
  sort?: Maybe<ScalarsEnums['Float']>;
}

export interface Project_Definition {
  __typename?: 'Project_Definition';
  academy_packs: (args?: {
    filter?: Maybe<Academy_Packs_Project_Definition_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Academy_Packs_Project_Definition>>>;
  date_created?: Maybe<ScalarsEnums['Date']>;
  date_created_func?: Maybe<datetime_functions>;
  date_updated?: Maybe<ScalarsEnums['Date']>;
  date_updated_func?: Maybe<datetime_functions>;
  description?: Maybe<ScalarsEnums['String']>;
  extra_features?: Maybe<ScalarsEnums['Int']>;
  features: (args?: {
    filter?: Maybe<Project_Definition_Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Project_Definition_Technical_Feature>>>;
  id?: Maybe<ScalarsEnums['ID']>;
  sort?: Maybe<ScalarsEnums['Int']>;
  status: ScalarsEnums['String'];
  user_created?: Maybe<ScalarsEnums['String']>;
  user_updated?: Maybe<ScalarsEnums['String']>;
}

export interface Project_Definition_Technical_Feature {
  __typename?: 'Project_Definition_Technical_Feature';
  Project_Definition_id: (args?: {
    filter?: Maybe<Project_Definition_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Project_Definition>;
  Technical_Feature_id: (args?: {
    filter?: Maybe<Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Technical_Feature>;
  id?: Maybe<ScalarsEnums['ID']>;
}

export interface Project_Definition_Technical_Feature_aggregated {
  __typename?: 'Project_Definition_Technical_Feature_aggregated';
  avg?: Maybe<Project_Definition_Technical_Feature_aggregated_fields>;
  avgDistinct?: Maybe<Project_Definition_Technical_Feature_aggregated_fields>;
  count?: Maybe<Project_Definition_Technical_Feature_aggregated_fields>;
  countDistinct?: Maybe<Project_Definition_Technical_Feature_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Project_Definition_Technical_Feature_aggregated_fields>;
  min?: Maybe<Project_Definition_Technical_Feature_aggregated_fields>;
  sum?: Maybe<Project_Definition_Technical_Feature_aggregated_fields>;
  sumDistinct?: Maybe<Project_Definition_Technical_Feature_aggregated_fields>;
}

export interface Project_Definition_Technical_Feature_aggregated_fields {
  __typename?: 'Project_Definition_Technical_Feature_aggregated_fields';
  id?: Maybe<ScalarsEnums['Float']>;
}

export interface Project_Definition_aggregated {
  __typename?: 'Project_Definition_aggregated';
  avg?: Maybe<Project_Definition_aggregated_fields>;
  avgDistinct?: Maybe<Project_Definition_aggregated_fields>;
  count?: Maybe<Project_Definition_aggregated_fields>;
  countDistinct?: Maybe<Project_Definition_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Project_Definition_aggregated_fields>;
  min?: Maybe<Project_Definition_aggregated_fields>;
  sum?: Maybe<Project_Definition_aggregated_fields>;
  sumDistinct?: Maybe<Project_Definition_aggregated_fields>;
}

export interface Project_Definition_aggregated_fields {
  __typename?: 'Project_Definition_aggregated_fields';
  extra_features?: Maybe<ScalarsEnums['Float']>;
  sort?: Maybe<ScalarsEnums['Float']>;
}

export interface Skills {
  __typename?: 'Skills';
  date_created?: Maybe<ScalarsEnums['Date']>;
  date_created_func?: Maybe<datetime_functions>;
  date_updated?: Maybe<ScalarsEnums['Date']>;
  date_updated_func?: Maybe<datetime_functions>;
  id?: Maybe<ScalarsEnums['ID']>;
  members: (args?: {
    filter?: Maybe<members_Skills_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<members_Skills>>>;
  name?: Maybe<ScalarsEnums['String']>;
  sort?: Maybe<ScalarsEnums['Int']>;
  status: ScalarsEnums['String'];
  technical_features: (args?: {
    filter?: Maybe<Technical_Feature_Skills_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Skills>>>;
  user_created?: Maybe<ScalarsEnums['String']>;
  user_updated?: Maybe<ScalarsEnums['String']>;
}

export interface Skills_aggregated {
  __typename?: 'Skills_aggregated';
  avg?: Maybe<Skills_aggregated_fields>;
  avgDistinct?: Maybe<Skills_aggregated_fields>;
  count?: Maybe<Skills_aggregated_fields>;
  countDistinct?: Maybe<Skills_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Skills_aggregated_fields>;
  min?: Maybe<Skills_aggregated_fields>;
  sum?: Maybe<Skills_aggregated_fields>;
  sumDistinct?: Maybe<Skills_aggregated_fields>;
}

export interface Skills_aggregated_fields {
  __typename?: 'Skills_aggregated_fields';
  sort?: Maybe<ScalarsEnums['Float']>;
}

export interface Technical_Feature {
  __typename?: 'Technical_Feature';
  abstraction_level?: Maybe<ScalarsEnums['Float']>;
  children: (args?: {
    filter?: Maybe<Technical_Feature_Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Technical_Feature>>>;
  date_created?: Maybe<ScalarsEnums['Date']>;
  date_created_func?: Maybe<datetime_functions>;
  date_updated?: Maybe<ScalarsEnums['Date']>;
  date_updated_func?: Maybe<datetime_functions>;
  description?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['ID']>;
  name?: Maybe<ScalarsEnums['String']>;
  parent: (args?: {
    filter?: Maybe<Technical_Feature_Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Technical_Feature>>>;
  projects: (args?: {
    filter?: Maybe<Project_Definition_Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Project_Definition_Technical_Feature>>>;
  resources: (args?: {
    filter?: Maybe<Technical_Feature_Technical_Resource_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Technical_Resource>>>;
  sort?: Maybe<ScalarsEnums['Int']>;
  status: ScalarsEnums['String'];
  user_created?: Maybe<ScalarsEnums['String']>;
  user_updated?: Maybe<ScalarsEnums['String']>;
}

export interface Technical_Feature_Skills {
  __typename?: 'Technical_Feature_Skills';
  Skills_id: (args?: {
    filter?: Maybe<Skills_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Skills>;
  Technical_Feature_id: (args?: {
    filter?: Maybe<Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Technical_Feature>;
  id?: Maybe<ScalarsEnums['ID']>;
}

export interface Technical_Feature_Skills_aggregated {
  __typename?: 'Technical_Feature_Skills_aggregated';
  avg?: Maybe<Technical_Feature_Skills_aggregated_fields>;
  avgDistinct?: Maybe<Technical_Feature_Skills_aggregated_fields>;
  count?: Maybe<Technical_Feature_Skills_aggregated_fields>;
  countDistinct?: Maybe<Technical_Feature_Skills_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Technical_Feature_Skills_aggregated_fields>;
  min?: Maybe<Technical_Feature_Skills_aggregated_fields>;
  sum?: Maybe<Technical_Feature_Skills_aggregated_fields>;
  sumDistinct?: Maybe<Technical_Feature_Skills_aggregated_fields>;
}

export interface Technical_Feature_Skills_aggregated_fields {
  __typename?: 'Technical_Feature_Skills_aggregated_fields';
  id?: Maybe<ScalarsEnums['Float']>;
}

export interface Technical_Feature_Technical_Feature {
  __typename?: 'Technical_Feature_Technical_Feature';
  Technical_Feature_id: (args?: {
    filter?: Maybe<Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Technical_Feature>;
  id?: Maybe<ScalarsEnums['ID']>;
  related_Technical_Feature_id: (args?: {
    filter?: Maybe<Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Technical_Feature>;
}

export interface Technical_Feature_Technical_Feature_aggregated {
  __typename?: 'Technical_Feature_Technical_Feature_aggregated';
  avg?: Maybe<Technical_Feature_Technical_Feature_aggregated_fields>;
  avgDistinct?: Maybe<Technical_Feature_Technical_Feature_aggregated_fields>;
  count?: Maybe<Technical_Feature_Technical_Feature_aggregated_fields>;
  countDistinct?: Maybe<Technical_Feature_Technical_Feature_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Technical_Feature_Technical_Feature_aggregated_fields>;
  min?: Maybe<Technical_Feature_Technical_Feature_aggregated_fields>;
  sum?: Maybe<Technical_Feature_Technical_Feature_aggregated_fields>;
  sumDistinct?: Maybe<Technical_Feature_Technical_Feature_aggregated_fields>;
}

export interface Technical_Feature_Technical_Feature_aggregated_fields {
  __typename?: 'Technical_Feature_Technical_Feature_aggregated_fields';
  id?: Maybe<ScalarsEnums['Float']>;
}

export interface Technical_Feature_Technical_Resource {
  __typename?: 'Technical_Feature_Technical_Resource';
  Technical_Feature_id: (args?: {
    filter?: Maybe<Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Technical_Feature>;
  Technical_Resource_id: (args?: {
    filter?: Maybe<Technical_Resource_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Technical_Resource>;
  id?: Maybe<ScalarsEnums['ID']>;
}

export interface Technical_Feature_Technical_Resource_aggregated {
  __typename?: 'Technical_Feature_Technical_Resource_aggregated';
  avg?: Maybe<Technical_Feature_Technical_Resource_aggregated_fields>;
  avgDistinct?: Maybe<Technical_Feature_Technical_Resource_aggregated_fields>;
  count?: Maybe<Technical_Feature_Technical_Resource_aggregated_fields>;
  countDistinct?: Maybe<Technical_Feature_Technical_Resource_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Technical_Feature_Technical_Resource_aggregated_fields>;
  min?: Maybe<Technical_Feature_Technical_Resource_aggregated_fields>;
  sum?: Maybe<Technical_Feature_Technical_Resource_aggregated_fields>;
  sumDistinct?: Maybe<Technical_Feature_Technical_Resource_aggregated_fields>;
}

export interface Technical_Feature_Technical_Resource_aggregated_fields {
  __typename?: 'Technical_Feature_Technical_Resource_aggregated_fields';
  id?: Maybe<ScalarsEnums['Float']>;
}

export interface Technical_Feature_aggregated {
  __typename?: 'Technical_Feature_aggregated';
  avg?: Maybe<Technical_Feature_aggregated_fields>;
  avgDistinct?: Maybe<Technical_Feature_aggregated_fields>;
  count?: Maybe<Technical_Feature_aggregated_fields>;
  countDistinct?: Maybe<Technical_Feature_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Technical_Feature_aggregated_fields>;
  min?: Maybe<Technical_Feature_aggregated_fields>;
  sum?: Maybe<Technical_Feature_aggregated_fields>;
  sumDistinct?: Maybe<Technical_Feature_aggregated_fields>;
}

export interface Technical_Feature_aggregated_fields {
  __typename?: 'Technical_Feature_aggregated_fields';
  abstraction_level?: Maybe<ScalarsEnums['Float']>;
  sort?: Maybe<ScalarsEnums['Float']>;
}

export interface Technical_Resource {
  __typename?: 'Technical_Resource';
  date_created?: Maybe<ScalarsEnums['Date']>;
  date_created_func?: Maybe<datetime_functions>;
  date_updated?: Maybe<ScalarsEnums['Date']>;
  date_updated_func?: Maybe<datetime_functions>;
  description?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['ID']>;
  name?: Maybe<ScalarsEnums['String']>;
  skills?: Maybe<ScalarsEnums['String']>;
  sort?: Maybe<ScalarsEnums['Int']>;
  status: ScalarsEnums['String'];
  user_created?: Maybe<ScalarsEnums['String']>;
  user_updated?: Maybe<ScalarsEnums['String']>;
}

export interface Technical_Resource_aggregated {
  __typename?: 'Technical_Resource_aggregated';
  avg?: Maybe<Technical_Resource_aggregated_fields>;
  avgDistinct?: Maybe<Technical_Resource_aggregated_fields>;
  count?: Maybe<Technical_Resource_aggregated_fields>;
  countDistinct?: Maybe<Technical_Resource_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<Technical_Resource_aggregated_fields>;
  min?: Maybe<Technical_Resource_aggregated_fields>;
  sum?: Maybe<Technical_Resource_aggregated_fields>;
  sumDistinct?: Maybe<Technical_Resource_aggregated_fields>;
}

export interface Technical_Resource_aggregated_fields {
  __typename?: 'Technical_Resource_aggregated_fields';
  sort?: Maybe<ScalarsEnums['Float']>;
}

export interface datetime_functions {
  __typename?: 'datetime_functions';
  day?: Maybe<ScalarsEnums['Int']>;
  hour?: Maybe<ScalarsEnums['Int']>;
  minute?: Maybe<ScalarsEnums['Int']>;
  month?: Maybe<ScalarsEnums['Int']>;
  second?: Maybe<ScalarsEnums['Int']>;
  week?: Maybe<ScalarsEnums['Int']>;
  weekday?: Maybe<ScalarsEnums['Int']>;
  year?: Maybe<ScalarsEnums['Int']>;
}

export interface members {
  __typename?: 'members';
  birthday?: Maybe<ScalarsEnums['Date']>;
  birthday_func?: Maybe<datetime_functions>;
  date_created?: Maybe<ScalarsEnums['Date']>;
  date_created_func?: Maybe<datetime_functions>;
  date_updated?: Maybe<ScalarsEnums['Date']>;
  date_updated_func?: Maybe<datetime_functions>;
  email?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['ID']>;
  name?: Maybe<ScalarsEnums['String']>;
  skills: (args?: {
    filter?: Maybe<members_Skills_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<members_Skills>>>;
  sort?: Maybe<ScalarsEnums['Int']>;
  user_created?: Maybe<ScalarsEnums['String']>;
  user_updated?: Maybe<ScalarsEnums['String']>;
}

export interface members_Skills {
  __typename?: 'members_Skills';
  Skills_id: (args?: {
    filter?: Maybe<Skills_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Skills>;
  id?: Maybe<ScalarsEnums['ID']>;
  members_id: (args?: {
    filter?: Maybe<members_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<members>;
}

export interface members_Skills_aggregated {
  __typename?: 'members_Skills_aggregated';
  avg?: Maybe<members_Skills_aggregated_fields>;
  avgDistinct?: Maybe<members_Skills_aggregated_fields>;
  count?: Maybe<members_Skills_aggregated_fields>;
  countDistinct?: Maybe<members_Skills_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<members_Skills_aggregated_fields>;
  min?: Maybe<members_Skills_aggregated_fields>;
  sum?: Maybe<members_Skills_aggregated_fields>;
  sumDistinct?: Maybe<members_Skills_aggregated_fields>;
}

export interface members_Skills_aggregated_fields {
  __typename?: 'members_Skills_aggregated_fields';
  id?: Maybe<ScalarsEnums['Float']>;
}

export interface members_aggregated {
  __typename?: 'members_aggregated';
  avg?: Maybe<members_aggregated_fields>;
  avgDistinct?: Maybe<members_aggregated_fields>;
  count?: Maybe<members_aggregated_fields>;
  countDistinct?: Maybe<members_aggregated_fields>;
  group?: Maybe<ScalarsEnums['JSON']>;
  max?: Maybe<members_aggregated_fields>;
  min?: Maybe<members_aggregated_fields>;
  sum?: Maybe<members_aggregated_fields>;
  sumDistinct?: Maybe<members_aggregated_fields>;
}

export interface members_aggregated_fields {
  __typename?: 'members_aggregated_fields';
  sort?: Maybe<ScalarsEnums['Float']>;
}

export interface Mutation {
  __typename?: 'Mutation';
}

export interface Query {
  __typename?: 'Query';
  Academy_Packs: (args?: {
    filter?: Maybe<Academy_Packs_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Academy_Packs>>>;
  Academy_Packs_Project_Definition: (args?: {
    filter?: Maybe<Academy_Packs_Project_Definition_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Academy_Packs_Project_Definition>>>;
  Academy_Packs_Project_Definition_aggregated: (args?: {
    filter?: Maybe<Academy_Packs_Project_Definition_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Academy_Packs_Project_Definition_aggregated>>>;
  Academy_Packs_Project_Definition_by_id: (args: {
    id: Scalars['ID'];
  }) => Maybe<Academy_Packs_Project_Definition>;
  Academy_Packs_aggregated: (args?: {
    filter?: Maybe<Academy_Packs_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Academy_Packs_aggregated>>>;
  Academy_Packs_by_id: (args: { id: Scalars['ID'] }) => Maybe<Academy_Packs>;
  Project_Definition: (args?: {
    filter?: Maybe<Project_Definition_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Project_Definition>>>;
  Project_Definition_Technical_Feature: (args?: {
    filter?: Maybe<Project_Definition_Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Project_Definition_Technical_Feature>>>;
  Project_Definition_Technical_Feature_aggregated: (args?: {
    filter?: Maybe<Project_Definition_Technical_Feature_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Project_Definition_Technical_Feature_aggregated>>>;
  Project_Definition_Technical_Feature_by_id: (args: {
    id: Scalars['ID'];
  }) => Maybe<Project_Definition_Technical_Feature>;
  Project_Definition_aggregated: (args?: {
    filter?: Maybe<Project_Definition_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Project_Definition_aggregated>>>;
  Project_Definition_by_id: (args: {
    id: Scalars['ID'];
  }) => Maybe<Project_Definition>;
  Skills: (args?: {
    filter?: Maybe<Skills_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Skills>>>;
  Skills_aggregated: (args?: {
    filter?: Maybe<Skills_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Skills_aggregated>>>;
  Skills_by_id: (args: { id: Scalars['ID'] }) => Maybe<Skills>;
  Technical_Feature: (args?: {
    filter?: Maybe<Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature>>>;
  Technical_Feature_Skills: (args?: {
    filter?: Maybe<Technical_Feature_Skills_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Skills>>>;
  Technical_Feature_Skills_aggregated: (args?: {
    filter?: Maybe<Technical_Feature_Skills_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Skills_aggregated>>>;
  Technical_Feature_Skills_by_id: (args: {
    id: Scalars['ID'];
  }) => Maybe<Technical_Feature_Skills>;
  Technical_Feature_Technical_Feature: (args?: {
    filter?: Maybe<Technical_Feature_Technical_Feature_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Technical_Feature>>>;
  Technical_Feature_Technical_Feature_aggregated: (args?: {
    filter?: Maybe<Technical_Feature_Technical_Feature_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Technical_Feature_aggregated>>>;
  Technical_Feature_Technical_Feature_by_id: (args: {
    id: Scalars['ID'];
  }) => Maybe<Technical_Feature_Technical_Feature>;
  Technical_Feature_Technical_Resource: (args?: {
    filter?: Maybe<Technical_Feature_Technical_Resource_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Technical_Resource>>>;
  Technical_Feature_Technical_Resource_aggregated: (args?: {
    filter?: Maybe<Technical_Feature_Technical_Resource_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_Technical_Resource_aggregated>>>;
  Technical_Feature_Technical_Resource_by_id: (args: {
    id: Scalars['ID'];
  }) => Maybe<Technical_Feature_Technical_Resource>;
  Technical_Feature_aggregated: (args?: {
    filter?: Maybe<Technical_Feature_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Feature_aggregated>>>;
  Technical_Feature_by_id: (args: {
    id: Scalars['ID'];
  }) => Maybe<Technical_Feature>;
  Technical_Resource: (args?: {
    filter?: Maybe<Technical_Resource_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Resource>>>;
  Technical_Resource_aggregated: (args?: {
    filter?: Maybe<Technical_Resource_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<Technical_Resource_aggregated>>>;
  Technical_Resource_by_id: (args: {
    id: Scalars['ID'];
  }) => Maybe<Technical_Resource>;
  members: (args?: {
    filter?: Maybe<members_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<members>>>;
  members_Skills: (args?: {
    filter?: Maybe<members_Skills_filter>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<members_Skills>>>;
  members_Skills_aggregated: (args?: {
    filter?: Maybe<members_Skills_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<members_Skills_aggregated>>>;
  members_Skills_by_id: (args: { id: Scalars['ID'] }) => Maybe<members_Skills>;
  members_aggregated: (args?: {
    filter?: Maybe<members_filter>;
    groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
    limit?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  }) => Maybe<Array<Maybe<members_aggregated>>>;
  members_by_id: (args: { id: Scalars['ID'] }) => Maybe<members>;
}

export interface Subscription {
  __typename?: 'Subscription';
}

export interface SchemaObjectTypes {
  Academy_Packs: Academy_Packs;
  Academy_Packs_Project_Definition: Academy_Packs_Project_Definition;
  Academy_Packs_Project_Definition_aggregated: Academy_Packs_Project_Definition_aggregated;
  Academy_Packs_Project_Definition_aggregated_fields: Academy_Packs_Project_Definition_aggregated_fields;
  Academy_Packs_aggregated: Academy_Packs_aggregated;
  Academy_Packs_aggregated_fields: Academy_Packs_aggregated_fields;
  Mutation: Mutation;
  Project_Definition: Project_Definition;
  Project_Definition_Technical_Feature: Project_Definition_Technical_Feature;
  Project_Definition_Technical_Feature_aggregated: Project_Definition_Technical_Feature_aggregated;
  Project_Definition_Technical_Feature_aggregated_fields: Project_Definition_Technical_Feature_aggregated_fields;
  Project_Definition_aggregated: Project_Definition_aggregated;
  Project_Definition_aggregated_fields: Project_Definition_aggregated_fields;
  Query: Query;
  Skills: Skills;
  Skills_aggregated: Skills_aggregated;
  Skills_aggregated_fields: Skills_aggregated_fields;
  Subscription: Subscription;
  Technical_Feature: Technical_Feature;
  Technical_Feature_Skills: Technical_Feature_Skills;
  Technical_Feature_Skills_aggregated: Technical_Feature_Skills_aggregated;
  Technical_Feature_Skills_aggregated_fields: Technical_Feature_Skills_aggregated_fields;
  Technical_Feature_Technical_Feature: Technical_Feature_Technical_Feature;
  Technical_Feature_Technical_Feature_aggregated: Technical_Feature_Technical_Feature_aggregated;
  Technical_Feature_Technical_Feature_aggregated_fields: Technical_Feature_Technical_Feature_aggregated_fields;
  Technical_Feature_Technical_Resource: Technical_Feature_Technical_Resource;
  Technical_Feature_Technical_Resource_aggregated: Technical_Feature_Technical_Resource_aggregated;
  Technical_Feature_Technical_Resource_aggregated_fields: Technical_Feature_Technical_Resource_aggregated_fields;
  Technical_Feature_aggregated: Technical_Feature_aggregated;
  Technical_Feature_aggregated_fields: Technical_Feature_aggregated_fields;
  Technical_Resource: Technical_Resource;
  Technical_Resource_aggregated: Technical_Resource_aggregated;
  Technical_Resource_aggregated_fields: Technical_Resource_aggregated_fields;
  datetime_functions: datetime_functions;
  members: members;
  members_Skills: members_Skills;
  members_Skills_aggregated: members_Skills_aggregated;
  members_Skills_aggregated_fields: members_Skills_aggregated_fields;
  members_aggregated: members_aggregated;
  members_aggregated_fields: members_aggregated_fields;
}
export type SchemaObjectTypesNames =
  | 'Academy_Packs'
  | 'Academy_Packs_Project_Definition'
  | 'Academy_Packs_Project_Definition_aggregated'
  | 'Academy_Packs_Project_Definition_aggregated_fields'
  | 'Academy_Packs_aggregated'
  | 'Academy_Packs_aggregated_fields'
  | 'Mutation'
  | 'Project_Definition'
  | 'Project_Definition_Technical_Feature'
  | 'Project_Definition_Technical_Feature_aggregated'
  | 'Project_Definition_Technical_Feature_aggregated_fields'
  | 'Project_Definition_aggregated'
  | 'Project_Definition_aggregated_fields'
  | 'Query'
  | 'Skills'
  | 'Skills_aggregated'
  | 'Skills_aggregated_fields'
  | 'Subscription'
  | 'Technical_Feature'
  | 'Technical_Feature_Skills'
  | 'Technical_Feature_Skills_aggregated'
  | 'Technical_Feature_Skills_aggregated_fields'
  | 'Technical_Feature_Technical_Feature'
  | 'Technical_Feature_Technical_Feature_aggregated'
  | 'Technical_Feature_Technical_Feature_aggregated_fields'
  | 'Technical_Feature_Technical_Resource'
  | 'Technical_Feature_Technical_Resource_aggregated'
  | 'Technical_Feature_Technical_Resource_aggregated_fields'
  | 'Technical_Feature_aggregated'
  | 'Technical_Feature_aggregated_fields'
  | 'Technical_Resource'
  | 'Technical_Resource_aggregated'
  | 'Technical_Resource_aggregated_fields'
  | 'datetime_functions'
  | 'members'
  | 'members_Skills'
  | 'members_Skills_aggregated'
  | 'members_Skills_aggregated_fields'
  | 'members_aggregated'
  | 'members_aggregated_fields';

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
