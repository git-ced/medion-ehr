import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "appointment" */
export type Appointment = {
  __typename?: 'appointment';
  createdAt: Scalars['timestamptz'];
  dateEnded: Scalars['date'];
  dateStarted: Scalars['date'];
  id: Scalars['uuid'];
  notes?: Maybe<Scalars['String']>;
  participants: Scalars['String'];
  /** An object relationship */
  physician: Physician_In_Hospital;
  physicianInHospitalId: Scalars['uuid'];
  roomPassword: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "appointment" */
export type Appointment_Aggregate = {
  __typename?: 'appointment_aggregate';
  aggregate?: Maybe<Appointment_Aggregate_Fields>;
  nodes: Array<Appointment>;
};

/** aggregate fields of "appointment" */
export type Appointment_Aggregate_Fields = {
  __typename?: 'appointment_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Appointment_Max_Fields>;
  min?: Maybe<Appointment_Min_Fields>;
};


/** aggregate fields of "appointment" */
export type Appointment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Appointment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "appointment" */
export type Appointment_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Appointment_Max_Order_By>;
  min?: Maybe<Appointment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "appointment" */
export type Appointment_Arr_Rel_Insert_Input = {
  data: Array<Appointment_Insert_Input>;
  on_conflict?: Maybe<Appointment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "appointment". All fields are combined with a logical 'AND'. */
export type Appointment_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Appointment_Bool_Exp>>>;
  _not?: Maybe<Appointment_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Appointment_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dateEnded?: Maybe<Date_Comparison_Exp>;
  dateStarted?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  notes?: Maybe<String_Comparison_Exp>;
  participants?: Maybe<String_Comparison_Exp>;
  physician?: Maybe<Physician_In_Hospital_Bool_Exp>;
  physicianInHospitalId?: Maybe<Uuid_Comparison_Exp>;
  roomPassword?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "appointment" */
export enum Appointment_Constraint {
  /** unique or primary key constraint */
  AppointmentPkey = 'appointment_pkey'
}

/** input type for inserting data into table "appointment" */
export type Appointment_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  participants?: Maybe<Scalars['String']>;
  physician?: Maybe<Physician_In_Hospital_Obj_Rel_Insert_Input>;
  physicianInHospitalId?: Maybe<Scalars['uuid']>;
  roomPassword?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Appointment_Max_Fields = {
  __typename?: 'appointment_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  participants?: Maybe<Scalars['String']>;
  physicianInHospitalId?: Maybe<Scalars['uuid']>;
  roomPassword?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "appointment" */
export type Appointment_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  dateEnded?: Maybe<Order_By>;
  dateStarted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  participants?: Maybe<Order_By>;
  physicianInHospitalId?: Maybe<Order_By>;
  roomPassword?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Appointment_Min_Fields = {
  __typename?: 'appointment_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  participants?: Maybe<Scalars['String']>;
  physicianInHospitalId?: Maybe<Scalars['uuid']>;
  roomPassword?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "appointment" */
export type Appointment_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  dateEnded?: Maybe<Order_By>;
  dateStarted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  participants?: Maybe<Order_By>;
  physicianInHospitalId?: Maybe<Order_By>;
  roomPassword?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "appointment" */
export type Appointment_Mutation_Response = {
  __typename?: 'appointment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Appointment>;
};

/** input type for inserting object relation for remote table "appointment" */
export type Appointment_Obj_Rel_Insert_Input = {
  data: Appointment_Insert_Input;
  on_conflict?: Maybe<Appointment_On_Conflict>;
};

/** on conflict condition type for table "appointment" */
export type Appointment_On_Conflict = {
  constraint: Appointment_Constraint;
  update_columns: Array<Appointment_Update_Column>;
  where?: Maybe<Appointment_Bool_Exp>;
};

/** ordering options when selecting data from "appointment" */
export type Appointment_Order_By = {
  createdAt?: Maybe<Order_By>;
  dateEnded?: Maybe<Order_By>;
  dateStarted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  participants?: Maybe<Order_By>;
  physician?: Maybe<Physician_In_Hospital_Order_By>;
  physicianInHospitalId?: Maybe<Order_By>;
  roomPassword?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "appointment" */
export type Appointment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "appointment" */
export enum Appointment_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEnded = 'dateEnded',
  /** column name */
  DateStarted = 'dateStarted',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Participants = 'participants',
  /** column name */
  PhysicianInHospitalId = 'physicianInHospitalId',
  /** column name */
  RoomPassword = 'roomPassword',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "appointment" */
export type Appointment_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  participants?: Maybe<Scalars['String']>;
  physicianInHospitalId?: Maybe<Scalars['uuid']>;
  roomPassword?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "appointment" */
export enum Appointment_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEnded = 'dateEnded',
  /** column name */
  DateStarted = 'dateStarted',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Participants = 'participants',
  /** column name */
  PhysicianInHospitalId = 'physicianInHospitalId',
  /** column name */
  RoomPassword = 'roomPassword',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "blood_pressure" */
export type Blood_Pressure = {
  __typename?: 'blood_pressure';
  createdAt: Scalars['timestamptz'];
  diastolic: Scalars['numeric'];
  id: Scalars['uuid'];
  systolic: Scalars['numeric'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  vitralItem?: Maybe<Vital_Item>;
};

/** aggregated selection of "blood_pressure" */
export type Blood_Pressure_Aggregate = {
  __typename?: 'blood_pressure_aggregate';
  aggregate?: Maybe<Blood_Pressure_Aggregate_Fields>;
  nodes: Array<Blood_Pressure>;
};

/** aggregate fields of "blood_pressure" */
export type Blood_Pressure_Aggregate_Fields = {
  __typename?: 'blood_pressure_aggregate_fields';
  avg?: Maybe<Blood_Pressure_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Blood_Pressure_Max_Fields>;
  min?: Maybe<Blood_Pressure_Min_Fields>;
  stddev?: Maybe<Blood_Pressure_Stddev_Fields>;
  stddev_pop?: Maybe<Blood_Pressure_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blood_Pressure_Stddev_Samp_Fields>;
  sum?: Maybe<Blood_Pressure_Sum_Fields>;
  var_pop?: Maybe<Blood_Pressure_Var_Pop_Fields>;
  var_samp?: Maybe<Blood_Pressure_Var_Samp_Fields>;
  variance?: Maybe<Blood_Pressure_Variance_Fields>;
};


/** aggregate fields of "blood_pressure" */
export type Blood_Pressure_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Blood_Pressure_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blood_pressure" */
export type Blood_Pressure_Aggregate_Order_By = {
  avg?: Maybe<Blood_Pressure_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Blood_Pressure_Max_Order_By>;
  min?: Maybe<Blood_Pressure_Min_Order_By>;
  stddev?: Maybe<Blood_Pressure_Stddev_Order_By>;
  stddev_pop?: Maybe<Blood_Pressure_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Blood_Pressure_Stddev_Samp_Order_By>;
  sum?: Maybe<Blood_Pressure_Sum_Order_By>;
  var_pop?: Maybe<Blood_Pressure_Var_Pop_Order_By>;
  var_samp?: Maybe<Blood_Pressure_Var_Samp_Order_By>;
  variance?: Maybe<Blood_Pressure_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "blood_pressure" */
export type Blood_Pressure_Arr_Rel_Insert_Input = {
  data: Array<Blood_Pressure_Insert_Input>;
  on_conflict?: Maybe<Blood_Pressure_On_Conflict>;
};

/** aggregate avg on columns */
export type Blood_Pressure_Avg_Fields = {
  __typename?: 'blood_pressure_avg_fields';
  diastolic?: Maybe<Scalars['Float']>;
  systolic?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blood_pressure" */
export type Blood_Pressure_Avg_Order_By = {
  diastolic?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "blood_pressure". All fields are combined with a logical 'AND'. */
export type Blood_Pressure_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Blood_Pressure_Bool_Exp>>>;
  _not?: Maybe<Blood_Pressure_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Blood_Pressure_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  diastolic?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  systolic?: Maybe<Numeric_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  vitralItem?: Maybe<Vital_Item_Bool_Exp>;
};

/** unique or primary key constraints on table "blood_pressure" */
export enum Blood_Pressure_Constraint {
  /** unique or primary key constraint */
  BloodPressurePkey = 'blood_pressure_pkey'
}

/** input type for incrementing integer column in table "blood_pressure" */
export type Blood_Pressure_Inc_Input = {
  diastolic?: Maybe<Scalars['numeric']>;
  systolic?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "blood_pressure" */
export type Blood_Pressure_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  diastolic?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  systolic?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vitralItem?: Maybe<Vital_Item_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Blood_Pressure_Max_Fields = {
  __typename?: 'blood_pressure_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  diastolic?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  systolic?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "blood_pressure" */
export type Blood_Pressure_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  diastolic?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Blood_Pressure_Min_Fields = {
  __typename?: 'blood_pressure_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  diastolic?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  systolic?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "blood_pressure" */
export type Blood_Pressure_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  diastolic?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "blood_pressure" */
export type Blood_Pressure_Mutation_Response = {
  __typename?: 'blood_pressure_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Blood_Pressure>;
};

/** input type for inserting object relation for remote table "blood_pressure" */
export type Blood_Pressure_Obj_Rel_Insert_Input = {
  data: Blood_Pressure_Insert_Input;
  on_conflict?: Maybe<Blood_Pressure_On_Conflict>;
};

/** on conflict condition type for table "blood_pressure" */
export type Blood_Pressure_On_Conflict = {
  constraint: Blood_Pressure_Constraint;
  update_columns: Array<Blood_Pressure_Update_Column>;
  where?: Maybe<Blood_Pressure_Bool_Exp>;
};

/** ordering options when selecting data from "blood_pressure" */
export type Blood_Pressure_Order_By = {
  createdAt?: Maybe<Order_By>;
  diastolic?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  vitralItem?: Maybe<Vital_Item_Order_By>;
};

/** primary key columns input for table: "blood_pressure" */
export type Blood_Pressure_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "blood_pressure" */
export enum Blood_Pressure_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Diastolic = 'diastolic',
  /** column name */
  Id = 'id',
  /** column name */
  Systolic = 'systolic',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "blood_pressure" */
export type Blood_Pressure_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  diastolic?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  systolic?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Blood_Pressure_Stddev_Fields = {
  __typename?: 'blood_pressure_stddev_fields';
  diastolic?: Maybe<Scalars['Float']>;
  systolic?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blood_pressure" */
export type Blood_Pressure_Stddev_Order_By = {
  diastolic?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Blood_Pressure_Stddev_Pop_Fields = {
  __typename?: 'blood_pressure_stddev_pop_fields';
  diastolic?: Maybe<Scalars['Float']>;
  systolic?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blood_pressure" */
export type Blood_Pressure_Stddev_Pop_Order_By = {
  diastolic?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Blood_Pressure_Stddev_Samp_Fields = {
  __typename?: 'blood_pressure_stddev_samp_fields';
  diastolic?: Maybe<Scalars['Float']>;
  systolic?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blood_pressure" */
export type Blood_Pressure_Stddev_Samp_Order_By = {
  diastolic?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Blood_Pressure_Sum_Fields = {
  __typename?: 'blood_pressure_sum_fields';
  diastolic?: Maybe<Scalars['numeric']>;
  systolic?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "blood_pressure" */
export type Blood_Pressure_Sum_Order_By = {
  diastolic?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
};

/** update columns of table "blood_pressure" */
export enum Blood_Pressure_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Diastolic = 'diastolic',
  /** column name */
  Id = 'id',
  /** column name */
  Systolic = 'systolic',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Blood_Pressure_Var_Pop_Fields = {
  __typename?: 'blood_pressure_var_pop_fields';
  diastolic?: Maybe<Scalars['Float']>;
  systolic?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blood_pressure" */
export type Blood_Pressure_Var_Pop_Order_By = {
  diastolic?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Blood_Pressure_Var_Samp_Fields = {
  __typename?: 'blood_pressure_var_samp_fields';
  diastolic?: Maybe<Scalars['Float']>;
  systolic?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blood_pressure" */
export type Blood_Pressure_Var_Samp_Order_By = {
  diastolic?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Blood_Pressure_Variance_Fields = {
  __typename?: 'blood_pressure_variance_fields';
  diastolic?: Maybe<Scalars['Float']>;
  systolic?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blood_pressure" */
export type Blood_Pressure_Variance_Order_By = {
  diastolic?: Maybe<Order_By>;
  systolic?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "hospital" */
export type Hospital = {
  __typename?: 'hospital';
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  displayPhotoId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  establishmentDate: Scalars['date'];
  /** An object relationship */
  hospitalStatus: Hospital_Status;
  id: Scalars['uuid'];
  location: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  patients: Array<Patient>;
  /** An aggregated array relationship */
  patients_aggregate: Patient_Aggregate;
  phoneNumber: Scalars['String'];
  /** An array relationship */
  physicians: Array<Physician_In_Hospital>;
  /** An aggregated array relationship */
  physicians_aggregate: Physician_In_Hospital_Aggregate;
  status: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "hospital" */
export type HospitalPatientsArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};


/** columns and relationships of "hospital" */
export type HospitalPatients_AggregateArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};


/** columns and relationships of "hospital" */
export type HospitalPhysiciansArgs = {
  distinct_on?: Maybe<Array<Physician_In_Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physician_In_Hospital_Order_By>>;
  where?: Maybe<Physician_In_Hospital_Bool_Exp>;
};


/** columns and relationships of "hospital" */
export type HospitalPhysicians_AggregateArgs = {
  distinct_on?: Maybe<Array<Physician_In_Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physician_In_Hospital_Order_By>>;
  where?: Maybe<Physician_In_Hospital_Bool_Exp>;
};

/** aggregated selection of "hospital" */
export type Hospital_Aggregate = {
  __typename?: 'hospital_aggregate';
  aggregate?: Maybe<Hospital_Aggregate_Fields>;
  nodes: Array<Hospital>;
};

/** aggregate fields of "hospital" */
export type Hospital_Aggregate_Fields = {
  __typename?: 'hospital_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hospital_Max_Fields>;
  min?: Maybe<Hospital_Min_Fields>;
};


/** aggregate fields of "hospital" */
export type Hospital_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hospital_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hospital" */
export type Hospital_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Hospital_Max_Order_By>;
  min?: Maybe<Hospital_Min_Order_By>;
};

/** input type for inserting array relation for remote table "hospital" */
export type Hospital_Arr_Rel_Insert_Input = {
  data: Array<Hospital_Insert_Input>;
  on_conflict?: Maybe<Hospital_On_Conflict>;
};

/** Boolean expression to filter rows from the table "hospital". All fields are combined with a logical 'AND'. */
export type Hospital_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hospital_Bool_Exp>>>;
  _not?: Maybe<Hospital_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hospital_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  displayPhotoId?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  establishmentDate?: Maybe<Date_Comparison_Exp>;
  hospitalStatus?: Maybe<Hospital_Status_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  patients?: Maybe<Patient_Bool_Exp>;
  phoneNumber?: Maybe<String_Comparison_Exp>;
  physicians?: Maybe<Physician_In_Hospital_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "hospital" */
export enum Hospital_Constraint {
  /** unique or primary key constraint */
  HospitalPkey = 'hospital_pkey'
}

/** input type for inserting data into table "hospital" */
export type Hospital_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  displayPhotoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  establishmentDate?: Maybe<Scalars['date']>;
  hospitalStatus?: Maybe<Hospital_Status_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  patients?: Maybe<Patient_Arr_Rel_Insert_Input>;
  phoneNumber?: Maybe<Scalars['String']>;
  physicians?: Maybe<Physician_In_Hospital_Arr_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Hospital_Max_Fields = {
  __typename?: 'hospital_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  displayPhotoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  establishmentDate?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "hospital" */
export type Hospital_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  displayPhotoId?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  establishmentDate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Hospital_Min_Fields = {
  __typename?: 'hospital_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  displayPhotoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  establishmentDate?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "hospital" */
export type Hospital_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  displayPhotoId?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  establishmentDate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "hospital" */
export type Hospital_Mutation_Response = {
  __typename?: 'hospital_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Hospital>;
};

/** input type for inserting object relation for remote table "hospital" */
export type Hospital_Obj_Rel_Insert_Input = {
  data: Hospital_Insert_Input;
  on_conflict?: Maybe<Hospital_On_Conflict>;
};

/** on conflict condition type for table "hospital" */
export type Hospital_On_Conflict = {
  constraint: Hospital_Constraint;
  update_columns: Array<Hospital_Update_Column>;
  where?: Maybe<Hospital_Bool_Exp>;
};

/** ordering options when selecting data from "hospital" */
export type Hospital_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  displayPhotoId?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  establishmentDate?: Maybe<Order_By>;
  hospitalStatus?: Maybe<Hospital_Status_Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  patients_aggregate?: Maybe<Patient_Aggregate_Order_By>;
  phoneNumber?: Maybe<Order_By>;
  physicians_aggregate?: Maybe<Physician_In_Hospital_Aggregate_Order_By>;
  status?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "hospital" */
export type Hospital_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "hospital" */
export enum Hospital_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayPhotoId = 'displayPhotoId',
  /** column name */
  Email = 'email',
  /** column name */
  EstablishmentDate = 'establishmentDate',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "hospital" */
export type Hospital_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  displayPhotoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  establishmentDate?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "hospital_status" */
export type Hospital_Status = {
  __typename?: 'hospital_status';
  /** An array relationship */
  hospitals: Array<Hospital>;
  /** An aggregated array relationship */
  hospitals_aggregate: Hospital_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "hospital_status" */
export type Hospital_StatusHospitalsArgs = {
  distinct_on?: Maybe<Array<Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Order_By>>;
  where?: Maybe<Hospital_Bool_Exp>;
};


/** columns and relationships of "hospital_status" */
export type Hospital_StatusHospitals_AggregateArgs = {
  distinct_on?: Maybe<Array<Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Order_By>>;
  where?: Maybe<Hospital_Bool_Exp>;
};

/** aggregated selection of "hospital_status" */
export type Hospital_Status_Aggregate = {
  __typename?: 'hospital_status_aggregate';
  aggregate?: Maybe<Hospital_Status_Aggregate_Fields>;
  nodes: Array<Hospital_Status>;
};

/** aggregate fields of "hospital_status" */
export type Hospital_Status_Aggregate_Fields = {
  __typename?: 'hospital_status_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hospital_Status_Max_Fields>;
  min?: Maybe<Hospital_Status_Min_Fields>;
};


/** aggregate fields of "hospital_status" */
export type Hospital_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hospital_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hospital_status" */
export type Hospital_Status_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Hospital_Status_Max_Order_By>;
  min?: Maybe<Hospital_Status_Min_Order_By>;
};

/** input type for inserting array relation for remote table "hospital_status" */
export type Hospital_Status_Arr_Rel_Insert_Input = {
  data: Array<Hospital_Status_Insert_Input>;
  on_conflict?: Maybe<Hospital_Status_On_Conflict>;
};

/** Boolean expression to filter rows from the table "hospital_status". All fields are combined with a logical 'AND'. */
export type Hospital_Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hospital_Status_Bool_Exp>>>;
  _not?: Maybe<Hospital_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hospital_Status_Bool_Exp>>>;
  hospitals?: Maybe<Hospital_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "hospital_status" */
export enum Hospital_Status_Constraint {
  /** unique or primary key constraint */
  HospitalStatusPkey = 'hospital_status_pkey'
}

/** input type for inserting data into table "hospital_status" */
export type Hospital_Status_Insert_Input = {
  hospitals?: Maybe<Hospital_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Hospital_Status_Max_Fields = {
  __typename?: 'hospital_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "hospital_status" */
export type Hospital_Status_Max_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Hospital_Status_Min_Fields = {
  __typename?: 'hospital_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "hospital_status" */
export type Hospital_Status_Min_Order_By = {
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "hospital_status" */
export type Hospital_Status_Mutation_Response = {
  __typename?: 'hospital_status_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Hospital_Status>;
};

/** input type for inserting object relation for remote table "hospital_status" */
export type Hospital_Status_Obj_Rel_Insert_Input = {
  data: Hospital_Status_Insert_Input;
  on_conflict?: Maybe<Hospital_Status_On_Conflict>;
};

/** on conflict condition type for table "hospital_status" */
export type Hospital_Status_On_Conflict = {
  constraint: Hospital_Status_Constraint;
  update_columns: Array<Hospital_Status_Update_Column>;
  where?: Maybe<Hospital_Status_Bool_Exp>;
};

/** ordering options when selecting data from "hospital_status" */
export type Hospital_Status_Order_By = {
  hospitals_aggregate?: Maybe<Hospital_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "hospital_status" */
export type Hospital_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "hospital_status" */
export enum Hospital_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "hospital_status" */
export type Hospital_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "hospital_status" */
export enum Hospital_Status_Update_Column {
  /** column name */
  Value = 'value'
}

/** update columns of table "hospital" */
export enum Hospital_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayPhotoId = 'displayPhotoId',
  /** column name */
  Email = 'email',
  /** column name */
  EstablishmentDate = 'establishmentDate',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "medical_record" */
export type Medical_Record = {
  __typename?: 'medical_record';
  createdAt: Scalars['timestamptz'];
  dateEnded: Scalars['date'];
  dateStarted: Scalars['date'];
  general_diagnosis: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  medicationItems: Array<Medication_Item>;
  /** An aggregated array relationship */
  medicationItems_aggregate: Medication_Item_Aggregate;
  otherDescription?: Maybe<Scalars['String']>;
  physicianNotes?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "medical_record" */
export type Medical_RecordMedicationItemsArgs = {
  distinct_on?: Maybe<Array<Medication_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medication_Item_Order_By>>;
  where?: Maybe<Medication_Item_Bool_Exp>;
};


/** columns and relationships of "medical_record" */
export type Medical_RecordMedicationItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Medication_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medication_Item_Order_By>>;
  where?: Maybe<Medication_Item_Bool_Exp>;
};

/** aggregated selection of "medical_record" */
export type Medical_Record_Aggregate = {
  __typename?: 'medical_record_aggregate';
  aggregate?: Maybe<Medical_Record_Aggregate_Fields>;
  nodes: Array<Medical_Record>;
};

/** aggregate fields of "medical_record" */
export type Medical_Record_Aggregate_Fields = {
  __typename?: 'medical_record_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Medical_Record_Max_Fields>;
  min?: Maybe<Medical_Record_Min_Fields>;
};


/** aggregate fields of "medical_record" */
export type Medical_Record_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Medical_Record_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "medical_record" */
export type Medical_Record_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Medical_Record_Max_Order_By>;
  min?: Maybe<Medical_Record_Min_Order_By>;
};

/** input type for inserting array relation for remote table "medical_record" */
export type Medical_Record_Arr_Rel_Insert_Input = {
  data: Array<Medical_Record_Insert_Input>;
  on_conflict?: Maybe<Medical_Record_On_Conflict>;
};

/** Boolean expression to filter rows from the table "medical_record". All fields are combined with a logical 'AND'. */
export type Medical_Record_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Medical_Record_Bool_Exp>>>;
  _not?: Maybe<Medical_Record_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Medical_Record_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dateEnded?: Maybe<Date_Comparison_Exp>;
  dateStarted?: Maybe<Date_Comparison_Exp>;
  general_diagnosis?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  medicationItems?: Maybe<Medication_Item_Bool_Exp>;
  otherDescription?: Maybe<String_Comparison_Exp>;
  physicianNotes?: Maybe<String_Comparison_Exp>;
  summary?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "medical_record" */
export enum Medical_Record_Constraint {
  /** unique or primary key constraint */
  MedicalRecordPkey = 'medical_record_pkey'
}

/** input type for inserting data into table "medical_record" */
export type Medical_Record_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  general_diagnosis?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  medicationItems?: Maybe<Medication_Item_Arr_Rel_Insert_Input>;
  otherDescription?: Maybe<Scalars['String']>;
  physicianNotes?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Medical_Record_Max_Fields = {
  __typename?: 'medical_record_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  general_diagnosis?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  otherDescription?: Maybe<Scalars['String']>;
  physicianNotes?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "medical_record" */
export type Medical_Record_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  dateEnded?: Maybe<Order_By>;
  dateStarted?: Maybe<Order_By>;
  general_diagnosis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  otherDescription?: Maybe<Order_By>;
  physicianNotes?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Medical_Record_Min_Fields = {
  __typename?: 'medical_record_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  general_diagnosis?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  otherDescription?: Maybe<Scalars['String']>;
  physicianNotes?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "medical_record" */
export type Medical_Record_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  dateEnded?: Maybe<Order_By>;
  dateStarted?: Maybe<Order_By>;
  general_diagnosis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  otherDescription?: Maybe<Order_By>;
  physicianNotes?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "medical_record" */
export type Medical_Record_Mutation_Response = {
  __typename?: 'medical_record_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Medical_Record>;
};

/** input type for inserting object relation for remote table "medical_record" */
export type Medical_Record_Obj_Rel_Insert_Input = {
  data: Medical_Record_Insert_Input;
  on_conflict?: Maybe<Medical_Record_On_Conflict>;
};

/** on conflict condition type for table "medical_record" */
export type Medical_Record_On_Conflict = {
  constraint: Medical_Record_Constraint;
  update_columns: Array<Medical_Record_Update_Column>;
  where?: Maybe<Medical_Record_Bool_Exp>;
};

/** ordering options when selecting data from "medical_record" */
export type Medical_Record_Order_By = {
  createdAt?: Maybe<Order_By>;
  dateEnded?: Maybe<Order_By>;
  dateStarted?: Maybe<Order_By>;
  general_diagnosis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  medicationItems_aggregate?: Maybe<Medication_Item_Aggregate_Order_By>;
  otherDescription?: Maybe<Order_By>;
  physicianNotes?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "medical_record" */
export type Medical_Record_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "medical_record" */
export enum Medical_Record_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEnded = 'dateEnded',
  /** column name */
  DateStarted = 'dateStarted',
  /** column name */
  GeneralDiagnosis = 'general_diagnosis',
  /** column name */
  Id = 'id',
  /** column name */
  OtherDescription = 'otherDescription',
  /** column name */
  PhysicianNotes = 'physicianNotes',
  /** column name */
  Summary = 'summary',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "medical_record" */
export type Medical_Record_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  general_diagnosis?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  otherDescription?: Maybe<Scalars['String']>;
  physicianNotes?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "medical_record" */
export enum Medical_Record_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEnded = 'dateEnded',
  /** column name */
  DateStarted = 'dateStarted',
  /** column name */
  GeneralDiagnosis = 'general_diagnosis',
  /** column name */
  Id = 'id',
  /** column name */
  OtherDescription = 'otherDescription',
  /** column name */
  PhysicianNotes = 'physicianNotes',
  /** column name */
  Summary = 'summary',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "medication_item" */
export type Medication_Item = {
  __typename?: 'medication_item';
  createdAt: Scalars['timestamptz'];
  dateEnded: Scalars['date'];
  dateStarted: Scalars['date'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  medicalRecord: Medical_Record;
  medicalRecordId: Scalars['uuid'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "medication_item" */
export type Medication_Item_Aggregate = {
  __typename?: 'medication_item_aggregate';
  aggregate?: Maybe<Medication_Item_Aggregate_Fields>;
  nodes: Array<Medication_Item>;
};

/** aggregate fields of "medication_item" */
export type Medication_Item_Aggregate_Fields = {
  __typename?: 'medication_item_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Medication_Item_Max_Fields>;
  min?: Maybe<Medication_Item_Min_Fields>;
};


/** aggregate fields of "medication_item" */
export type Medication_Item_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Medication_Item_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "medication_item" */
export type Medication_Item_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Medication_Item_Max_Order_By>;
  min?: Maybe<Medication_Item_Min_Order_By>;
};

/** input type for inserting array relation for remote table "medication_item" */
export type Medication_Item_Arr_Rel_Insert_Input = {
  data: Array<Medication_Item_Insert_Input>;
  on_conflict?: Maybe<Medication_Item_On_Conflict>;
};

/** Boolean expression to filter rows from the table "medication_item". All fields are combined with a logical 'AND'. */
export type Medication_Item_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Medication_Item_Bool_Exp>>>;
  _not?: Maybe<Medication_Item_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Medication_Item_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dateEnded?: Maybe<Date_Comparison_Exp>;
  dateStarted?: Maybe<Date_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  medicalRecord?: Maybe<Medical_Record_Bool_Exp>;
  medicalRecordId?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "medication_item" */
export enum Medication_Item_Constraint {
  /** unique or primary key constraint */
  MedicationItemPkey = 'medication_item_pkey'
}

/** input type for inserting data into table "medication_item" */
export type Medication_Item_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  medicalRecord?: Maybe<Medical_Record_Obj_Rel_Insert_Input>;
  medicalRecordId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Medication_Item_Max_Fields = {
  __typename?: 'medication_item_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  medicalRecordId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "medication_item" */
export type Medication_Item_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  dateEnded?: Maybe<Order_By>;
  dateStarted?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  medicalRecordId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Medication_Item_Min_Fields = {
  __typename?: 'medication_item_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  medicalRecordId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "medication_item" */
export type Medication_Item_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  dateEnded?: Maybe<Order_By>;
  dateStarted?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  medicalRecordId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "medication_item" */
export type Medication_Item_Mutation_Response = {
  __typename?: 'medication_item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Medication_Item>;
};

/** input type for inserting object relation for remote table "medication_item" */
export type Medication_Item_Obj_Rel_Insert_Input = {
  data: Medication_Item_Insert_Input;
  on_conflict?: Maybe<Medication_Item_On_Conflict>;
};

/** on conflict condition type for table "medication_item" */
export type Medication_Item_On_Conflict = {
  constraint: Medication_Item_Constraint;
  update_columns: Array<Medication_Item_Update_Column>;
  where?: Maybe<Medication_Item_Bool_Exp>;
};

/** ordering options when selecting data from "medication_item" */
export type Medication_Item_Order_By = {
  createdAt?: Maybe<Order_By>;
  dateEnded?: Maybe<Order_By>;
  dateStarted?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  medicalRecord?: Maybe<Medical_Record_Order_By>;
  medicalRecordId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "medication_item" */
export type Medication_Item_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "medication_item" */
export enum Medication_Item_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEnded = 'dateEnded',
  /** column name */
  DateStarted = 'dateStarted',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MedicalRecordId = 'medicalRecordId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "medication_item" */
export type Medication_Item_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEnded?: Maybe<Scalars['date']>;
  dateStarted?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  medicalRecordId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "medication_item" */
export enum Medication_Item_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEnded = 'dateEnded',
  /** column name */
  DateStarted = 'dateStarted',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MedicalRecordId = 'medicalRecordId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "appointment" */
  delete_appointment?: Maybe<Appointment_Mutation_Response>;
  /** delete single row from the table: "appointment" */
  delete_appointment_by_pk?: Maybe<Appointment>;
  /** delete data from the table: "blood_pressure" */
  delete_blood_pressure?: Maybe<Blood_Pressure_Mutation_Response>;
  /** delete single row from the table: "blood_pressure" */
  delete_blood_pressure_by_pk?: Maybe<Blood_Pressure>;
  /** delete data from the table: "hospital" */
  delete_hospital?: Maybe<Hospital_Mutation_Response>;
  /** delete single row from the table: "hospital" */
  delete_hospital_by_pk?: Maybe<Hospital>;
  /** delete data from the table: "hospital_status" */
  delete_hospital_status?: Maybe<Hospital_Status_Mutation_Response>;
  /** delete single row from the table: "hospital_status" */
  delete_hospital_status_by_pk?: Maybe<Hospital_Status>;
  /** delete data from the table: "medical_record" */
  delete_medical_record?: Maybe<Medical_Record_Mutation_Response>;
  /** delete single row from the table: "medical_record" */
  delete_medical_record_by_pk?: Maybe<Medical_Record>;
  /** delete data from the table: "medication_item" */
  delete_medication_item?: Maybe<Medication_Item_Mutation_Response>;
  /** delete single row from the table: "medication_item" */
  delete_medication_item_by_pk?: Maybe<Medication_Item>;
  /** delete data from the table: "patient" */
  delete_patient?: Maybe<Patient_Mutation_Response>;
  /** delete single row from the table: "patient" */
  delete_patient_by_pk?: Maybe<Patient>;
  /** delete data from the table: "physician_in_hospital" */
  delete_physician_in_hospital?: Maybe<Physician_In_Hospital_Mutation_Response>;
  /** delete single row from the table: "physician_in_hospital" */
  delete_physician_in_hospital_by_pk?: Maybe<Physician_In_Hospital>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_sex" */
  delete_user_sex?: Maybe<User_Sex_Mutation_Response>;
  /** delete single row from the table: "user_sex" */
  delete_user_sex_by_pk?: Maybe<User_Sex>;
  /** delete data from the table: "vital_item" */
  delete_vital_item?: Maybe<Vital_Item_Mutation_Response>;
  /** delete single row from the table: "vital_item" */
  delete_vital_item_by_pk?: Maybe<Vital_Item>;
  /** insert data into the table: "appointment" */
  insert_appointment?: Maybe<Appointment_Mutation_Response>;
  /** insert a single row into the table: "appointment" */
  insert_appointment_one?: Maybe<Appointment>;
  /** insert data into the table: "blood_pressure" */
  insert_blood_pressure?: Maybe<Blood_Pressure_Mutation_Response>;
  /** insert a single row into the table: "blood_pressure" */
  insert_blood_pressure_one?: Maybe<Blood_Pressure>;
  /** insert data into the table: "hospital" */
  insert_hospital?: Maybe<Hospital_Mutation_Response>;
  /** insert a single row into the table: "hospital" */
  insert_hospital_one?: Maybe<Hospital>;
  /** insert data into the table: "hospital_status" */
  insert_hospital_status?: Maybe<Hospital_Status_Mutation_Response>;
  /** insert a single row into the table: "hospital_status" */
  insert_hospital_status_one?: Maybe<Hospital_Status>;
  /** insert data into the table: "medical_record" */
  insert_medical_record?: Maybe<Medical_Record_Mutation_Response>;
  /** insert a single row into the table: "medical_record" */
  insert_medical_record_one?: Maybe<Medical_Record>;
  /** insert data into the table: "medication_item" */
  insert_medication_item?: Maybe<Medication_Item_Mutation_Response>;
  /** insert a single row into the table: "medication_item" */
  insert_medication_item_one?: Maybe<Medication_Item>;
  /** insert data into the table: "patient" */
  insert_patient?: Maybe<Patient_Mutation_Response>;
  /** insert a single row into the table: "patient" */
  insert_patient_one?: Maybe<Patient>;
  /** insert data into the table: "physician_in_hospital" */
  insert_physician_in_hospital?: Maybe<Physician_In_Hospital_Mutation_Response>;
  /** insert a single row into the table: "physician_in_hospital" */
  insert_physician_in_hospital_one?: Maybe<Physician_In_Hospital>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_sex" */
  insert_user_sex?: Maybe<User_Sex_Mutation_Response>;
  /** insert a single row into the table: "user_sex" */
  insert_user_sex_one?: Maybe<User_Sex>;
  /** insert data into the table: "vital_item" */
  insert_vital_item?: Maybe<Vital_Item_Mutation_Response>;
  /** insert a single row into the table: "vital_item" */
  insert_vital_item_one?: Maybe<Vital_Item>;
  /** update data of the table: "appointment" */
  update_appointment?: Maybe<Appointment_Mutation_Response>;
  /** update single row of the table: "appointment" */
  update_appointment_by_pk?: Maybe<Appointment>;
  /** update data of the table: "blood_pressure" */
  update_blood_pressure?: Maybe<Blood_Pressure_Mutation_Response>;
  /** update single row of the table: "blood_pressure" */
  update_blood_pressure_by_pk?: Maybe<Blood_Pressure>;
  /** update data of the table: "hospital" */
  update_hospital?: Maybe<Hospital_Mutation_Response>;
  /** update single row of the table: "hospital" */
  update_hospital_by_pk?: Maybe<Hospital>;
  /** update data of the table: "hospital_status" */
  update_hospital_status?: Maybe<Hospital_Status_Mutation_Response>;
  /** update single row of the table: "hospital_status" */
  update_hospital_status_by_pk?: Maybe<Hospital_Status>;
  /** update data of the table: "medical_record" */
  update_medical_record?: Maybe<Medical_Record_Mutation_Response>;
  /** update single row of the table: "medical_record" */
  update_medical_record_by_pk?: Maybe<Medical_Record>;
  /** update data of the table: "medication_item" */
  update_medication_item?: Maybe<Medication_Item_Mutation_Response>;
  /** update single row of the table: "medication_item" */
  update_medication_item_by_pk?: Maybe<Medication_Item>;
  /** update data of the table: "patient" */
  update_patient?: Maybe<Patient_Mutation_Response>;
  /** update single row of the table: "patient" */
  update_patient_by_pk?: Maybe<Patient>;
  /** update data of the table: "physician_in_hospital" */
  update_physician_in_hospital?: Maybe<Physician_In_Hospital_Mutation_Response>;
  /** update single row of the table: "physician_in_hospital" */
  update_physician_in_hospital_by_pk?: Maybe<Physician_In_Hospital>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_sex" */
  update_user_sex?: Maybe<User_Sex_Mutation_Response>;
  /** update single row of the table: "user_sex" */
  update_user_sex_by_pk?: Maybe<User_Sex>;
  /** update data of the table: "vital_item" */
  update_vital_item?: Maybe<Vital_Item_Mutation_Response>;
  /** update single row of the table: "vital_item" */
  update_vital_item_by_pk?: Maybe<Vital_Item>;
};


/** mutation root */
export type Mutation_RootDelete_AppointmentArgs = {
  where: Appointment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Appointment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Blood_PressureArgs = {
  where: Blood_Pressure_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blood_Pressure_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HospitalArgs = {
  where: Hospital_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hospital_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Hospital_StatusArgs = {
  where: Hospital_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hospital_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Medical_RecordArgs = {
  where: Medical_Record_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Medical_Record_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Medication_ItemArgs = {
  where: Medication_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Medication_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PatientArgs = {
  where: Patient_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Patient_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Physician_In_HospitalArgs = {
  where: Physician_In_Hospital_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Physician_In_Hospital_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_SexArgs = {
  where: User_Sex_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Sex_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Vital_ItemArgs = {
  where: Vital_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vital_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AppointmentArgs = {
  objects: Array<Appointment_Insert_Input>;
  on_conflict?: Maybe<Appointment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Appointment_OneArgs = {
  object: Appointment_Insert_Input;
  on_conflict?: Maybe<Appointment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blood_PressureArgs = {
  objects: Array<Blood_Pressure_Insert_Input>;
  on_conflict?: Maybe<Blood_Pressure_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blood_Pressure_OneArgs = {
  object: Blood_Pressure_Insert_Input;
  on_conflict?: Maybe<Blood_Pressure_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HospitalArgs = {
  objects: Array<Hospital_Insert_Input>;
  on_conflict?: Maybe<Hospital_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hospital_OneArgs = {
  object: Hospital_Insert_Input;
  on_conflict?: Maybe<Hospital_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hospital_StatusArgs = {
  objects: Array<Hospital_Status_Insert_Input>;
  on_conflict?: Maybe<Hospital_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hospital_Status_OneArgs = {
  object: Hospital_Status_Insert_Input;
  on_conflict?: Maybe<Hospital_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Medical_RecordArgs = {
  objects: Array<Medical_Record_Insert_Input>;
  on_conflict?: Maybe<Medical_Record_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Medical_Record_OneArgs = {
  object: Medical_Record_Insert_Input;
  on_conflict?: Maybe<Medical_Record_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Medication_ItemArgs = {
  objects: Array<Medication_Item_Insert_Input>;
  on_conflict?: Maybe<Medication_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Medication_Item_OneArgs = {
  object: Medication_Item_Insert_Input;
  on_conflict?: Maybe<Medication_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PatientArgs = {
  objects: Array<Patient_Insert_Input>;
  on_conflict?: Maybe<Patient_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Patient_OneArgs = {
  object: Patient_Insert_Input;
  on_conflict?: Maybe<Patient_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Physician_In_HospitalArgs = {
  objects: Array<Physician_In_Hospital_Insert_Input>;
  on_conflict?: Maybe<Physician_In_Hospital_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Physician_In_Hospital_OneArgs = {
  object: Physician_In_Hospital_Insert_Input;
  on_conflict?: Maybe<Physician_In_Hospital_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SexArgs = {
  objects: Array<User_Sex_Insert_Input>;
  on_conflict?: Maybe<User_Sex_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Sex_OneArgs = {
  object: User_Sex_Insert_Input;
  on_conflict?: Maybe<User_Sex_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vital_ItemArgs = {
  objects: Array<Vital_Item_Insert_Input>;
  on_conflict?: Maybe<Vital_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vital_Item_OneArgs = {
  object: Vital_Item_Insert_Input;
  on_conflict?: Maybe<Vital_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AppointmentArgs = {
  _set?: Maybe<Appointment_Set_Input>;
  where: Appointment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Appointment_By_PkArgs = {
  _set?: Maybe<Appointment_Set_Input>;
  pk_columns: Appointment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blood_PressureArgs = {
  _inc?: Maybe<Blood_Pressure_Inc_Input>;
  _set?: Maybe<Blood_Pressure_Set_Input>;
  where: Blood_Pressure_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blood_Pressure_By_PkArgs = {
  _inc?: Maybe<Blood_Pressure_Inc_Input>;
  _set?: Maybe<Blood_Pressure_Set_Input>;
  pk_columns: Blood_Pressure_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HospitalArgs = {
  _set?: Maybe<Hospital_Set_Input>;
  where: Hospital_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hospital_By_PkArgs = {
  _set?: Maybe<Hospital_Set_Input>;
  pk_columns: Hospital_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hospital_StatusArgs = {
  _set?: Maybe<Hospital_Status_Set_Input>;
  where: Hospital_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hospital_Status_By_PkArgs = {
  _set?: Maybe<Hospital_Status_Set_Input>;
  pk_columns: Hospital_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Medical_RecordArgs = {
  _set?: Maybe<Medical_Record_Set_Input>;
  where: Medical_Record_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Medical_Record_By_PkArgs = {
  _set?: Maybe<Medical_Record_Set_Input>;
  pk_columns: Medical_Record_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Medication_ItemArgs = {
  _set?: Maybe<Medication_Item_Set_Input>;
  where: Medication_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Medication_Item_By_PkArgs = {
  _set?: Maybe<Medication_Item_Set_Input>;
  pk_columns: Medication_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PatientArgs = {
  _set?: Maybe<Patient_Set_Input>;
  where: Patient_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Patient_By_PkArgs = {
  _set?: Maybe<Patient_Set_Input>;
  pk_columns: Patient_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Physician_In_HospitalArgs = {
  _set?: Maybe<Physician_In_Hospital_Set_Input>;
  where: Physician_In_Hospital_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Physician_In_Hospital_By_PkArgs = {
  _set?: Maybe<Physician_In_Hospital_Set_Input>;
  pk_columns: Physician_In_Hospital_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_SexArgs = {
  _set?: Maybe<User_Sex_Set_Input>;
  where: User_Sex_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sex_By_PkArgs = {
  _set?: Maybe<User_Sex_Set_Input>;
  pk_columns: User_Sex_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vital_ItemArgs = {
  _inc?: Maybe<Vital_Item_Inc_Input>;
  _set?: Maybe<Vital_Item_Set_Input>;
  where: Vital_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vital_Item_By_PkArgs = {
  _inc?: Maybe<Vital_Item_Inc_Input>;
  _set?: Maybe<Vital_Item_Set_Input>;
  pk_columns: Vital_Item_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "patient" */
export type Patient = {
  __typename?: 'patient';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  hospital: Hospital;
  hospitalId: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  physician: Physician_In_Hospital;
  physicianInHospitalId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** aggregated selection of "patient" */
export type Patient_Aggregate = {
  __typename?: 'patient_aggregate';
  aggregate?: Maybe<Patient_Aggregate_Fields>;
  nodes: Array<Patient>;
};

/** aggregate fields of "patient" */
export type Patient_Aggregate_Fields = {
  __typename?: 'patient_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Patient_Max_Fields>;
  min?: Maybe<Patient_Min_Fields>;
};


/** aggregate fields of "patient" */
export type Patient_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Patient_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "patient" */
export type Patient_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Patient_Max_Order_By>;
  min?: Maybe<Patient_Min_Order_By>;
};

/** input type for inserting array relation for remote table "patient" */
export type Patient_Arr_Rel_Insert_Input = {
  data: Array<Patient_Insert_Input>;
  on_conflict?: Maybe<Patient_On_Conflict>;
};

/** Boolean expression to filter rows from the table "patient". All fields are combined with a logical 'AND'. */
export type Patient_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Patient_Bool_Exp>>>;
  _not?: Maybe<Patient_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Patient_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  hospital?: Maybe<Hospital_Bool_Exp>;
  hospitalId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  physician?: Maybe<Physician_In_Hospital_Bool_Exp>;
  physicianInHospitalId?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "patient" */
export enum Patient_Constraint {
  /** unique or primary key constraint */
  PatientPkey = 'patient_pkey'
}

/** input type for inserting data into table "patient" */
export type Patient_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  hospital?: Maybe<Hospital_Obj_Rel_Insert_Input>;
  hospitalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  physician?: Maybe<Physician_In_Hospital_Obj_Rel_Insert_Input>;
  physicianInHospitalId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Patient_Max_Fields = {
  __typename?: 'patient_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  hospitalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  physicianInHospitalId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "patient" */
export type Patient_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  hospitalId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physicianInHospitalId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Patient_Min_Fields = {
  __typename?: 'patient_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  hospitalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  physicianInHospitalId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "patient" */
export type Patient_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  hospitalId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physicianInHospitalId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "patient" */
export type Patient_Mutation_Response = {
  __typename?: 'patient_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Patient>;
};

/** input type for inserting object relation for remote table "patient" */
export type Patient_Obj_Rel_Insert_Input = {
  data: Patient_Insert_Input;
  on_conflict?: Maybe<Patient_On_Conflict>;
};

/** on conflict condition type for table "patient" */
export type Patient_On_Conflict = {
  constraint: Patient_Constraint;
  update_columns: Array<Patient_Update_Column>;
  where?: Maybe<Patient_Bool_Exp>;
};

/** ordering options when selecting data from "patient" */
export type Patient_Order_By = {
  createdAt?: Maybe<Order_By>;
  hospital?: Maybe<Hospital_Order_By>;
  hospitalId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physician?: Maybe<Physician_In_Hospital_Order_By>;
  physicianInHospitalId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "patient" */
export type Patient_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "patient" */
export enum Patient_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HospitalId = 'hospitalId',
  /** column name */
  Id = 'id',
  /** column name */
  PhysicianInHospitalId = 'physicianInHospitalId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "patient" */
export type Patient_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  hospitalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  physicianInHospitalId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "patient" */
export enum Patient_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HospitalId = 'hospitalId',
  /** column name */
  Id = 'id',
  /** column name */
  PhysicianInHospitalId = 'physicianInHospitalId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "physician_in_hospital" */
export type Physician_In_Hospital = {
  __typename?: 'physician_in_hospital';
  /** An array relationship */
  appointments: Array<Appointment>;
  /** An aggregated array relationship */
  appointments_aggregate: Appointment_Aggregate;
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  hospital: Hospital;
  hospitalId: Scalars['uuid'];
  id: Scalars['uuid'];
  isActive: Scalars['Boolean'];
  isManagingPhysician: Scalars['Boolean'];
  /** An array relationship */
  patients: Array<Patient>;
  /** An aggregated array relationship */
  patients_aggregate: Patient_Aggregate;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};


/** columns and relationships of "physician_in_hospital" */
export type Physician_In_HospitalAppointmentsArgs = {
  distinct_on?: Maybe<Array<Appointment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appointment_Order_By>>;
  where?: Maybe<Appointment_Bool_Exp>;
};


/** columns and relationships of "physician_in_hospital" */
export type Physician_In_HospitalAppointments_AggregateArgs = {
  distinct_on?: Maybe<Array<Appointment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appointment_Order_By>>;
  where?: Maybe<Appointment_Bool_Exp>;
};


/** columns and relationships of "physician_in_hospital" */
export type Physician_In_HospitalPatientsArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};


/** columns and relationships of "physician_in_hospital" */
export type Physician_In_HospitalPatients_AggregateArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};

/** aggregated selection of "physician_in_hospital" */
export type Physician_In_Hospital_Aggregate = {
  __typename?: 'physician_in_hospital_aggregate';
  aggregate?: Maybe<Physician_In_Hospital_Aggregate_Fields>;
  nodes: Array<Physician_In_Hospital>;
};

/** aggregate fields of "physician_in_hospital" */
export type Physician_In_Hospital_Aggregate_Fields = {
  __typename?: 'physician_in_hospital_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Physician_In_Hospital_Max_Fields>;
  min?: Maybe<Physician_In_Hospital_Min_Fields>;
};


/** aggregate fields of "physician_in_hospital" */
export type Physician_In_Hospital_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Physician_In_Hospital_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "physician_in_hospital" */
export type Physician_In_Hospital_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Physician_In_Hospital_Max_Order_By>;
  min?: Maybe<Physician_In_Hospital_Min_Order_By>;
};

/** input type for inserting array relation for remote table "physician_in_hospital" */
export type Physician_In_Hospital_Arr_Rel_Insert_Input = {
  data: Array<Physician_In_Hospital_Insert_Input>;
  on_conflict?: Maybe<Physician_In_Hospital_On_Conflict>;
};

/** Boolean expression to filter rows from the table "physician_in_hospital". All fields are combined with a logical 'AND'. */
export type Physician_In_Hospital_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Physician_In_Hospital_Bool_Exp>>>;
  _not?: Maybe<Physician_In_Hospital_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Physician_In_Hospital_Bool_Exp>>>;
  appointments?: Maybe<Appointment_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  hospital?: Maybe<Hospital_Bool_Exp>;
  hospitalId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isActive?: Maybe<Boolean_Comparison_Exp>;
  isManagingPhysician?: Maybe<Boolean_Comparison_Exp>;
  patients?: Maybe<Patient_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "physician_in_hospital" */
export enum Physician_In_Hospital_Constraint {
  /** unique or primary key constraint */
  PhysicianInHospitalPkey = 'physician_in_hospital_pkey'
}

/** input type for inserting data into table "physician_in_hospital" */
export type Physician_In_Hospital_Insert_Input = {
  appointments?: Maybe<Appointment_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  hospital?: Maybe<Hospital_Obj_Rel_Insert_Input>;
  hospitalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isManagingPhysician?: Maybe<Scalars['Boolean']>;
  patients?: Maybe<Patient_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Physician_In_Hospital_Max_Fields = {
  __typename?: 'physician_in_hospital_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  hospitalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "physician_in_hospital" */
export type Physician_In_Hospital_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  hospitalId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Physician_In_Hospital_Min_Fields = {
  __typename?: 'physician_in_hospital_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  hospitalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "physician_in_hospital" */
export type Physician_In_Hospital_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  hospitalId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "physician_in_hospital" */
export type Physician_In_Hospital_Mutation_Response = {
  __typename?: 'physician_in_hospital_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Physician_In_Hospital>;
};

/** input type for inserting object relation for remote table "physician_in_hospital" */
export type Physician_In_Hospital_Obj_Rel_Insert_Input = {
  data: Physician_In_Hospital_Insert_Input;
  on_conflict?: Maybe<Physician_In_Hospital_On_Conflict>;
};

/** on conflict condition type for table "physician_in_hospital" */
export type Physician_In_Hospital_On_Conflict = {
  constraint: Physician_In_Hospital_Constraint;
  update_columns: Array<Physician_In_Hospital_Update_Column>;
  where?: Maybe<Physician_In_Hospital_Bool_Exp>;
};

/** ordering options when selecting data from "physician_in_hospital" */
export type Physician_In_Hospital_Order_By = {
  appointments_aggregate?: Maybe<Appointment_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  hospital?: Maybe<Hospital_Order_By>;
  hospitalId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isActive?: Maybe<Order_By>;
  isManagingPhysician?: Maybe<Order_By>;
  patients_aggregate?: Maybe<Patient_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "physician_in_hospital" */
export type Physician_In_Hospital_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "physician_in_hospital" */
export enum Physician_In_Hospital_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HospitalId = 'hospitalId',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  IsManagingPhysician = 'isManagingPhysician',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "physician_in_hospital" */
export type Physician_In_Hospital_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  hospitalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isManagingPhysician?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "physician_in_hospital" */
export enum Physician_In_Hospital_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HospitalId = 'hospitalId',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  IsManagingPhysician = 'isManagingPhysician',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "appointment" */
  appointment: Array<Appointment>;
  /** fetch aggregated fields from the table: "appointment" */
  appointment_aggregate: Appointment_Aggregate;
  /** fetch data from the table: "appointment" using primary key columns */
  appointment_by_pk?: Maybe<Appointment>;
  /** fetch data from the table: "blood_pressure" */
  blood_pressure: Array<Blood_Pressure>;
  /** fetch aggregated fields from the table: "blood_pressure" */
  blood_pressure_aggregate: Blood_Pressure_Aggregate;
  /** fetch data from the table: "blood_pressure" using primary key columns */
  blood_pressure_by_pk?: Maybe<Blood_Pressure>;
  /** fetch data from the table: "hospital" */
  hospital: Array<Hospital>;
  /** fetch aggregated fields from the table: "hospital" */
  hospital_aggregate: Hospital_Aggregate;
  /** fetch data from the table: "hospital" using primary key columns */
  hospital_by_pk?: Maybe<Hospital>;
  /** fetch data from the table: "hospital_status" */
  hospital_status: Array<Hospital_Status>;
  /** fetch aggregated fields from the table: "hospital_status" */
  hospital_status_aggregate: Hospital_Status_Aggregate;
  /** fetch data from the table: "hospital_status" using primary key columns */
  hospital_status_by_pk?: Maybe<Hospital_Status>;
  /** fetch data from the table: "medical_record" */
  medical_record: Array<Medical_Record>;
  /** fetch aggregated fields from the table: "medical_record" */
  medical_record_aggregate: Medical_Record_Aggregate;
  /** fetch data from the table: "medical_record" using primary key columns */
  medical_record_by_pk?: Maybe<Medical_Record>;
  /** fetch data from the table: "medication_item" */
  medication_item: Array<Medication_Item>;
  /** fetch aggregated fields from the table: "medication_item" */
  medication_item_aggregate: Medication_Item_Aggregate;
  /** fetch data from the table: "medication_item" using primary key columns */
  medication_item_by_pk?: Maybe<Medication_Item>;
  /** fetch data from the table: "patient" */
  patient: Array<Patient>;
  /** fetch aggregated fields from the table: "patient" */
  patient_aggregate: Patient_Aggregate;
  /** fetch data from the table: "patient" using primary key columns */
  patient_by_pk?: Maybe<Patient>;
  /** fetch data from the table: "physician_in_hospital" */
  physician_in_hospital: Array<Physician_In_Hospital>;
  /** fetch aggregated fields from the table: "physician_in_hospital" */
  physician_in_hospital_aggregate: Physician_In_Hospital_Aggregate;
  /** fetch data from the table: "physician_in_hospital" using primary key columns */
  physician_in_hospital_by_pk?: Maybe<Physician_In_Hospital>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_sex" */
  user_sex: Array<User_Sex>;
  /** fetch aggregated fields from the table: "user_sex" */
  user_sex_aggregate: User_Sex_Aggregate;
  /** fetch data from the table: "user_sex" using primary key columns */
  user_sex_by_pk?: Maybe<User_Sex>;
  /** fetch data from the table: "vital_item" */
  vital_item: Array<Vital_Item>;
  /** fetch aggregated fields from the table: "vital_item" */
  vital_item_aggregate: Vital_Item_Aggregate;
  /** fetch data from the table: "vital_item" using primary key columns */
  vital_item_by_pk?: Maybe<Vital_Item>;
};


/** query root */
export type Query_RootAppointmentArgs = {
  distinct_on?: Maybe<Array<Appointment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appointment_Order_By>>;
  where?: Maybe<Appointment_Bool_Exp>;
};


/** query root */
export type Query_RootAppointment_AggregateArgs = {
  distinct_on?: Maybe<Array<Appointment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appointment_Order_By>>;
  where?: Maybe<Appointment_Bool_Exp>;
};


/** query root */
export type Query_RootAppointment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootBlood_PressureArgs = {
  distinct_on?: Maybe<Array<Blood_Pressure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blood_Pressure_Order_By>>;
  where?: Maybe<Blood_Pressure_Bool_Exp>;
};


/** query root */
export type Query_RootBlood_Pressure_AggregateArgs = {
  distinct_on?: Maybe<Array<Blood_Pressure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blood_Pressure_Order_By>>;
  where?: Maybe<Blood_Pressure_Bool_Exp>;
};


/** query root */
export type Query_RootBlood_Pressure_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootHospitalArgs = {
  distinct_on?: Maybe<Array<Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Order_By>>;
  where?: Maybe<Hospital_Bool_Exp>;
};


/** query root */
export type Query_RootHospital_AggregateArgs = {
  distinct_on?: Maybe<Array<Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Order_By>>;
  where?: Maybe<Hospital_Bool_Exp>;
};


/** query root */
export type Query_RootHospital_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootHospital_StatusArgs = {
  distinct_on?: Maybe<Array<Hospital_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Status_Order_By>>;
  where?: Maybe<Hospital_Status_Bool_Exp>;
};


/** query root */
export type Query_RootHospital_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Hospital_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Status_Order_By>>;
  where?: Maybe<Hospital_Status_Bool_Exp>;
};


/** query root */
export type Query_RootHospital_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootMedical_RecordArgs = {
  distinct_on?: Maybe<Array<Medical_Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medical_Record_Order_By>>;
  where?: Maybe<Medical_Record_Bool_Exp>;
};


/** query root */
export type Query_RootMedical_Record_AggregateArgs = {
  distinct_on?: Maybe<Array<Medical_Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medical_Record_Order_By>>;
  where?: Maybe<Medical_Record_Bool_Exp>;
};


/** query root */
export type Query_RootMedical_Record_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootMedication_ItemArgs = {
  distinct_on?: Maybe<Array<Medication_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medication_Item_Order_By>>;
  where?: Maybe<Medication_Item_Bool_Exp>;
};


/** query root */
export type Query_RootMedication_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Medication_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medication_Item_Order_By>>;
  where?: Maybe<Medication_Item_Bool_Exp>;
};


/** query root */
export type Query_RootMedication_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPatientArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};


/** query root */
export type Query_RootPatient_AggregateArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};


/** query root */
export type Query_RootPatient_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPhysician_In_HospitalArgs = {
  distinct_on?: Maybe<Array<Physician_In_Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physician_In_Hospital_Order_By>>;
  where?: Maybe<Physician_In_Hospital_Bool_Exp>;
};


/** query root */
export type Query_RootPhysician_In_Hospital_AggregateArgs = {
  distinct_on?: Maybe<Array<Physician_In_Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physician_In_Hospital_Order_By>>;
  where?: Maybe<Physician_In_Hospital_Bool_Exp>;
};


/** query root */
export type Query_RootPhysician_In_Hospital_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootUser_SexArgs = {
  distinct_on?: Maybe<Array<User_Sex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Sex_Order_By>>;
  where?: Maybe<User_Sex_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Sex_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Sex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Sex_Order_By>>;
  where?: Maybe<User_Sex_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Sex_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootVital_ItemArgs = {
  distinct_on?: Maybe<Array<Vital_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vital_Item_Order_By>>;
  where?: Maybe<Vital_Item_Bool_Exp>;
};


/** query root */
export type Query_RootVital_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Vital_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vital_Item_Order_By>>;
  where?: Maybe<Vital_Item_Bool_Exp>;
};


/** query root */
export type Query_RootVital_Item_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "appointment" */
  appointment: Array<Appointment>;
  /** fetch aggregated fields from the table: "appointment" */
  appointment_aggregate: Appointment_Aggregate;
  /** fetch data from the table: "appointment" using primary key columns */
  appointment_by_pk?: Maybe<Appointment>;
  /** fetch data from the table: "blood_pressure" */
  blood_pressure: Array<Blood_Pressure>;
  /** fetch aggregated fields from the table: "blood_pressure" */
  blood_pressure_aggregate: Blood_Pressure_Aggregate;
  /** fetch data from the table: "blood_pressure" using primary key columns */
  blood_pressure_by_pk?: Maybe<Blood_Pressure>;
  /** fetch data from the table: "hospital" */
  hospital: Array<Hospital>;
  /** fetch aggregated fields from the table: "hospital" */
  hospital_aggregate: Hospital_Aggregate;
  /** fetch data from the table: "hospital" using primary key columns */
  hospital_by_pk?: Maybe<Hospital>;
  /** fetch data from the table: "hospital_status" */
  hospital_status: Array<Hospital_Status>;
  /** fetch aggregated fields from the table: "hospital_status" */
  hospital_status_aggregate: Hospital_Status_Aggregate;
  /** fetch data from the table: "hospital_status" using primary key columns */
  hospital_status_by_pk?: Maybe<Hospital_Status>;
  /** fetch data from the table: "medical_record" */
  medical_record: Array<Medical_Record>;
  /** fetch aggregated fields from the table: "medical_record" */
  medical_record_aggregate: Medical_Record_Aggregate;
  /** fetch data from the table: "medical_record" using primary key columns */
  medical_record_by_pk?: Maybe<Medical_Record>;
  /** fetch data from the table: "medication_item" */
  medication_item: Array<Medication_Item>;
  /** fetch aggregated fields from the table: "medication_item" */
  medication_item_aggregate: Medication_Item_Aggregate;
  /** fetch data from the table: "medication_item" using primary key columns */
  medication_item_by_pk?: Maybe<Medication_Item>;
  /** fetch data from the table: "patient" */
  patient: Array<Patient>;
  /** fetch aggregated fields from the table: "patient" */
  patient_aggregate: Patient_Aggregate;
  /** fetch data from the table: "patient" using primary key columns */
  patient_by_pk?: Maybe<Patient>;
  /** fetch data from the table: "physician_in_hospital" */
  physician_in_hospital: Array<Physician_In_Hospital>;
  /** fetch aggregated fields from the table: "physician_in_hospital" */
  physician_in_hospital_aggregate: Physician_In_Hospital_Aggregate;
  /** fetch data from the table: "physician_in_hospital" using primary key columns */
  physician_in_hospital_by_pk?: Maybe<Physician_In_Hospital>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_sex" */
  user_sex: Array<User_Sex>;
  /** fetch aggregated fields from the table: "user_sex" */
  user_sex_aggregate: User_Sex_Aggregate;
  /** fetch data from the table: "user_sex" using primary key columns */
  user_sex_by_pk?: Maybe<User_Sex>;
  /** fetch data from the table: "vital_item" */
  vital_item: Array<Vital_Item>;
  /** fetch aggregated fields from the table: "vital_item" */
  vital_item_aggregate: Vital_Item_Aggregate;
  /** fetch data from the table: "vital_item" using primary key columns */
  vital_item_by_pk?: Maybe<Vital_Item>;
};


/** subscription root */
export type Subscription_RootAppointmentArgs = {
  distinct_on?: Maybe<Array<Appointment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appointment_Order_By>>;
  where?: Maybe<Appointment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAppointment_AggregateArgs = {
  distinct_on?: Maybe<Array<Appointment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appointment_Order_By>>;
  where?: Maybe<Appointment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAppointment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootBlood_PressureArgs = {
  distinct_on?: Maybe<Array<Blood_Pressure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blood_Pressure_Order_By>>;
  where?: Maybe<Blood_Pressure_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlood_Pressure_AggregateArgs = {
  distinct_on?: Maybe<Array<Blood_Pressure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blood_Pressure_Order_By>>;
  where?: Maybe<Blood_Pressure_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlood_Pressure_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootHospitalArgs = {
  distinct_on?: Maybe<Array<Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Order_By>>;
  where?: Maybe<Hospital_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHospital_AggregateArgs = {
  distinct_on?: Maybe<Array<Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Order_By>>;
  where?: Maybe<Hospital_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHospital_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootHospital_StatusArgs = {
  distinct_on?: Maybe<Array<Hospital_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Status_Order_By>>;
  where?: Maybe<Hospital_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHospital_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Hospital_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hospital_Status_Order_By>>;
  where?: Maybe<Hospital_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHospital_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootMedical_RecordArgs = {
  distinct_on?: Maybe<Array<Medical_Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medical_Record_Order_By>>;
  where?: Maybe<Medical_Record_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMedical_Record_AggregateArgs = {
  distinct_on?: Maybe<Array<Medical_Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medical_Record_Order_By>>;
  where?: Maybe<Medical_Record_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMedical_Record_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootMedication_ItemArgs = {
  distinct_on?: Maybe<Array<Medication_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medication_Item_Order_By>>;
  where?: Maybe<Medication_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMedication_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Medication_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Medication_Item_Order_By>>;
  where?: Maybe<Medication_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMedication_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPatientArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPatient_AggregateArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPatient_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPhysician_In_HospitalArgs = {
  distinct_on?: Maybe<Array<Physician_In_Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physician_In_Hospital_Order_By>>;
  where?: Maybe<Physician_In_Hospital_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPhysician_In_Hospital_AggregateArgs = {
  distinct_on?: Maybe<Array<Physician_In_Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physician_In_Hospital_Order_By>>;
  where?: Maybe<Physician_In_Hospital_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPhysician_In_Hospital_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUser_SexArgs = {
  distinct_on?: Maybe<Array<User_Sex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Sex_Order_By>>;
  where?: Maybe<User_Sex_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Sex_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Sex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Sex_Order_By>>;
  where?: Maybe<User_Sex_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Sex_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootVital_ItemArgs = {
  distinct_on?: Maybe<Array<Vital_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vital_Item_Order_By>>;
  where?: Maybe<Vital_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVital_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Vital_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vital_Item_Order_By>>;
  where?: Maybe<Vital_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVital_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  birthDate: Scalars['date'];
  createdAt: Scalars['timestamptz'];
  displayPhotoId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  lastName: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  /** An array relationship */
  patients: Array<Patient>;
  /** An aggregated array relationship */
  patients_aggregate: Patient_Aggregate;
  /** An array relationship */
  physicians: Array<Physician_In_Hospital>;
  /** An aggregated array relationship */
  physicians_aggregate: Physician_In_Hospital_Aggregate;
  sex: Scalars['String'];
  updatedAt: Scalars['timestamp'];
  /** An object relationship */
  userSex: User_Sex;
};


/** columns and relationships of "user" */
export type UserPatientsArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPatients_AggregateArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Patient_Order_By>>;
  where?: Maybe<Patient_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPhysiciansArgs = {
  distinct_on?: Maybe<Array<Physician_In_Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physician_In_Hospital_Order_By>>;
  where?: Maybe<Physician_In_Hospital_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPhysicians_AggregateArgs = {
  distinct_on?: Maybe<Array<Physician_In_Hospital_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physician_In_Hospital_Order_By>>;
  where?: Maybe<Physician_In_Hospital_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  birthDate?: Maybe<Date_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  displayPhotoId?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  isAdmin?: Maybe<Boolean_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  middleName?: Maybe<String_Comparison_Exp>;
  patients?: Maybe<Patient_Bool_Exp>;
  physicians?: Maybe<Physician_In_Hospital_Bool_Exp>;
  sex?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamp_Comparison_Exp>;
  userSex?: Maybe<User_Sex_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  birthDate?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayPhotoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  patients?: Maybe<Patient_Arr_Rel_Insert_Input>;
  physicians?: Maybe<Physician_In_Hospital_Arr_Rel_Insert_Input>;
  sex?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userSex?: Maybe<User_Sex_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  birthDate?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayPhotoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  birthDate?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  displayPhotoId?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  middleName?: Maybe<Order_By>;
  sex?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  birthDate?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayPhotoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  birthDate?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  displayPhotoId?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  middleName?: Maybe<Order_By>;
  sex?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  birthDate?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  displayPhotoId?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isAdmin?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  middleName?: Maybe<Order_By>;
  patients_aggregate?: Maybe<Patient_Aggregate_Order_By>;
  physicians_aggregate?: Maybe<Physician_In_Hospital_Aggregate_Order_By>;
  sex?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userSex?: Maybe<User_Sex_Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  BirthDate = 'birthDate',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayPhotoId = 'displayPhotoId',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdmin = 'isAdmin',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Location = 'location',
  /** column name */
  MiddleName = 'middleName',
  /** column name */
  Sex = 'sex',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  birthDate?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayPhotoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** columns and relationships of "user_sex" */
export type User_Sex = {
  __typename?: 'user_sex';
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "user_sex" */
export type User_SexUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "user_sex" */
export type User_SexUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "user_sex" */
export type User_Sex_Aggregate = {
  __typename?: 'user_sex_aggregate';
  aggregate?: Maybe<User_Sex_Aggregate_Fields>;
  nodes: Array<User_Sex>;
};

/** aggregate fields of "user_sex" */
export type User_Sex_Aggregate_Fields = {
  __typename?: 'user_sex_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Sex_Max_Fields>;
  min?: Maybe<User_Sex_Min_Fields>;
};


/** aggregate fields of "user_sex" */
export type User_Sex_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Sex_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_sex" */
export type User_Sex_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Sex_Max_Order_By>;
  min?: Maybe<User_Sex_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_sex" */
export type User_Sex_Arr_Rel_Insert_Input = {
  data: Array<User_Sex_Insert_Input>;
  on_conflict?: Maybe<User_Sex_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_sex". All fields are combined with a logical 'AND'. */
export type User_Sex_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Sex_Bool_Exp>>>;
  _not?: Maybe<User_Sex_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Sex_Bool_Exp>>>;
  users?: Maybe<User_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_sex" */
export enum User_Sex_Constraint {
  /** unique or primary key constraint */
  UserSexPkey = 'user_sex_pkey'
}

/** input type for inserting data into table "user_sex" */
export type User_Sex_Insert_Input = {
  users?: Maybe<User_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Sex_Max_Fields = {
  __typename?: 'user_sex_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_sex" */
export type User_Sex_Max_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Sex_Min_Fields = {
  __typename?: 'user_sex_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_sex" */
export type User_Sex_Min_Order_By = {
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_sex" */
export type User_Sex_Mutation_Response = {
  __typename?: 'user_sex_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Sex>;
};

/** input type for inserting object relation for remote table "user_sex" */
export type User_Sex_Obj_Rel_Insert_Input = {
  data: User_Sex_Insert_Input;
  on_conflict?: Maybe<User_Sex_On_Conflict>;
};

/** on conflict condition type for table "user_sex" */
export type User_Sex_On_Conflict = {
  constraint: User_Sex_Constraint;
  update_columns: Array<User_Sex_Update_Column>;
  where?: Maybe<User_Sex_Bool_Exp>;
};

/** ordering options when selecting data from "user_sex" */
export type User_Sex_Order_By = {
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_sex" */
export type User_Sex_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "user_sex" */
export enum User_Sex_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_sex" */
export type User_Sex_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "user_sex" */
export enum User_Sex_Update_Column {
  /** column name */
  Value = 'value'
}

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  BirthDate = 'birthDate',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayPhotoId = 'displayPhotoId',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdmin = 'isAdmin',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Location = 'location',
  /** column name */
  MiddleName = 'middleName',
  /** column name */
  Sex = 'sex',
  /** column name */
  UpdatedAt = 'updatedAt'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "vital_item" */
export type Vital_Item = {
  __typename?: 'vital_item';
  bloodPressureId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  blood_pressure?: Maybe<Blood_Pressure>;
  bodyTemperature?: Maybe<Scalars['numeric']>;
  createdAt: Scalars['timestamptz'];
  dateTaken: Scalars['date'];
  heartRate?: Maybe<Scalars['numeric']>;
  id: Scalars['uuid'];
  oxygenSaturation?: Maybe<Scalars['numeric']>;
  respirationRate?: Maybe<Scalars['numeric']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "vital_item" */
export type Vital_Item_Aggregate = {
  __typename?: 'vital_item_aggregate';
  aggregate?: Maybe<Vital_Item_Aggregate_Fields>;
  nodes: Array<Vital_Item>;
};

/** aggregate fields of "vital_item" */
export type Vital_Item_Aggregate_Fields = {
  __typename?: 'vital_item_aggregate_fields';
  avg?: Maybe<Vital_Item_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vital_Item_Max_Fields>;
  min?: Maybe<Vital_Item_Min_Fields>;
  stddev?: Maybe<Vital_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Vital_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vital_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Vital_Item_Sum_Fields>;
  var_pop?: Maybe<Vital_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Vital_Item_Var_Samp_Fields>;
  variance?: Maybe<Vital_Item_Variance_Fields>;
};


/** aggregate fields of "vital_item" */
export type Vital_Item_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vital_Item_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vital_item" */
export type Vital_Item_Aggregate_Order_By = {
  avg?: Maybe<Vital_Item_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vital_Item_Max_Order_By>;
  min?: Maybe<Vital_Item_Min_Order_By>;
  stddev?: Maybe<Vital_Item_Stddev_Order_By>;
  stddev_pop?: Maybe<Vital_Item_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vital_Item_Stddev_Samp_Order_By>;
  sum?: Maybe<Vital_Item_Sum_Order_By>;
  var_pop?: Maybe<Vital_Item_Var_Pop_Order_By>;
  var_samp?: Maybe<Vital_Item_Var_Samp_Order_By>;
  variance?: Maybe<Vital_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vital_item" */
export type Vital_Item_Arr_Rel_Insert_Input = {
  data: Array<Vital_Item_Insert_Input>;
  on_conflict?: Maybe<Vital_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Vital_Item_Avg_Fields = {
  __typename?: 'vital_item_avg_fields';
  bodyTemperature?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<Scalars['Float']>;
  oxygenSaturation?: Maybe<Scalars['Float']>;
  respirationRate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vital_item" */
export type Vital_Item_Avg_Order_By = {
  bodyTemperature?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vital_item". All fields are combined with a logical 'AND'. */
export type Vital_Item_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vital_Item_Bool_Exp>>>;
  _not?: Maybe<Vital_Item_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vital_Item_Bool_Exp>>>;
  bloodPressureId?: Maybe<Uuid_Comparison_Exp>;
  blood_pressure?: Maybe<Blood_Pressure_Bool_Exp>;
  bodyTemperature?: Maybe<Numeric_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dateTaken?: Maybe<Date_Comparison_Exp>;
  heartRate?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  oxygenSaturation?: Maybe<Numeric_Comparison_Exp>;
  respirationRate?: Maybe<Numeric_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "vital_item" */
export enum Vital_Item_Constraint {
  /** unique or primary key constraint */
  VitalItemPkey = 'vital_item_pkey'
}

/** input type for incrementing integer column in table "vital_item" */
export type Vital_Item_Inc_Input = {
  bodyTemperature?: Maybe<Scalars['numeric']>;
  heartRate?: Maybe<Scalars['numeric']>;
  oxygenSaturation?: Maybe<Scalars['numeric']>;
  respirationRate?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "vital_item" */
export type Vital_Item_Insert_Input = {
  bloodPressureId?: Maybe<Scalars['uuid']>;
  blood_pressure?: Maybe<Blood_Pressure_Obj_Rel_Insert_Input>;
  bodyTemperature?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateTaken?: Maybe<Scalars['date']>;
  heartRate?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  oxygenSaturation?: Maybe<Scalars['numeric']>;
  respirationRate?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Vital_Item_Max_Fields = {
  __typename?: 'vital_item_max_fields';
  bloodPressureId?: Maybe<Scalars['uuid']>;
  bodyTemperature?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateTaken?: Maybe<Scalars['date']>;
  heartRate?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  oxygenSaturation?: Maybe<Scalars['numeric']>;
  respirationRate?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "vital_item" */
export type Vital_Item_Max_Order_By = {
  bloodPressureId?: Maybe<Order_By>;
  bodyTemperature?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dateTaken?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vital_Item_Min_Fields = {
  __typename?: 'vital_item_min_fields';
  bloodPressureId?: Maybe<Scalars['uuid']>;
  bodyTemperature?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateTaken?: Maybe<Scalars['date']>;
  heartRate?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  oxygenSaturation?: Maybe<Scalars['numeric']>;
  respirationRate?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "vital_item" */
export type Vital_Item_Min_Order_By = {
  bloodPressureId?: Maybe<Order_By>;
  bodyTemperature?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dateTaken?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "vital_item" */
export type Vital_Item_Mutation_Response = {
  __typename?: 'vital_item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Vital_Item>;
};

/** input type for inserting object relation for remote table "vital_item" */
export type Vital_Item_Obj_Rel_Insert_Input = {
  data: Vital_Item_Insert_Input;
  on_conflict?: Maybe<Vital_Item_On_Conflict>;
};

/** on conflict condition type for table "vital_item" */
export type Vital_Item_On_Conflict = {
  constraint: Vital_Item_Constraint;
  update_columns: Array<Vital_Item_Update_Column>;
  where?: Maybe<Vital_Item_Bool_Exp>;
};

/** ordering options when selecting data from "vital_item" */
export type Vital_Item_Order_By = {
  bloodPressureId?: Maybe<Order_By>;
  blood_pressure?: Maybe<Blood_Pressure_Order_By>;
  bodyTemperature?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dateTaken?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "vital_item" */
export type Vital_Item_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "vital_item" */
export enum Vital_Item_Select_Column {
  /** column name */
  BloodPressureId = 'bloodPressureId',
  /** column name */
  BodyTemperature = 'bodyTemperature',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateTaken = 'dateTaken',
  /** column name */
  HeartRate = 'heartRate',
  /** column name */
  Id = 'id',
  /** column name */
  OxygenSaturation = 'oxygenSaturation',
  /** column name */
  RespirationRate = 'respirationRate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "vital_item" */
export type Vital_Item_Set_Input = {
  bloodPressureId?: Maybe<Scalars['uuid']>;
  bodyTemperature?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateTaken?: Maybe<Scalars['date']>;
  heartRate?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  oxygenSaturation?: Maybe<Scalars['numeric']>;
  respirationRate?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Vital_Item_Stddev_Fields = {
  __typename?: 'vital_item_stddev_fields';
  bodyTemperature?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<Scalars['Float']>;
  oxygenSaturation?: Maybe<Scalars['Float']>;
  respirationRate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vital_item" */
export type Vital_Item_Stddev_Order_By = {
  bodyTemperature?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vital_Item_Stddev_Pop_Fields = {
  __typename?: 'vital_item_stddev_pop_fields';
  bodyTemperature?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<Scalars['Float']>;
  oxygenSaturation?: Maybe<Scalars['Float']>;
  respirationRate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vital_item" */
export type Vital_Item_Stddev_Pop_Order_By = {
  bodyTemperature?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vital_Item_Stddev_Samp_Fields = {
  __typename?: 'vital_item_stddev_samp_fields';
  bodyTemperature?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<Scalars['Float']>;
  oxygenSaturation?: Maybe<Scalars['Float']>;
  respirationRate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vital_item" */
export type Vital_Item_Stddev_Samp_Order_By = {
  bodyTemperature?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vital_Item_Sum_Fields = {
  __typename?: 'vital_item_sum_fields';
  bodyTemperature?: Maybe<Scalars['numeric']>;
  heartRate?: Maybe<Scalars['numeric']>;
  oxygenSaturation?: Maybe<Scalars['numeric']>;
  respirationRate?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "vital_item" */
export type Vital_Item_Sum_Order_By = {
  bodyTemperature?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
};

/** update columns of table "vital_item" */
export enum Vital_Item_Update_Column {
  /** column name */
  BloodPressureId = 'bloodPressureId',
  /** column name */
  BodyTemperature = 'bodyTemperature',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateTaken = 'dateTaken',
  /** column name */
  HeartRate = 'heartRate',
  /** column name */
  Id = 'id',
  /** column name */
  OxygenSaturation = 'oxygenSaturation',
  /** column name */
  RespirationRate = 'respirationRate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Vital_Item_Var_Pop_Fields = {
  __typename?: 'vital_item_var_pop_fields';
  bodyTemperature?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<Scalars['Float']>;
  oxygenSaturation?: Maybe<Scalars['Float']>;
  respirationRate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vital_item" */
export type Vital_Item_Var_Pop_Order_By = {
  bodyTemperature?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vital_Item_Var_Samp_Fields = {
  __typename?: 'vital_item_var_samp_fields';
  bodyTemperature?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<Scalars['Float']>;
  oxygenSaturation?: Maybe<Scalars['Float']>;
  respirationRate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vital_item" */
export type Vital_Item_Var_Samp_Order_By = {
  bodyTemperature?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vital_Item_Variance_Fields = {
  __typename?: 'vital_item_variance_fields';
  bodyTemperature?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<Scalars['Float']>;
  oxygenSaturation?: Maybe<Scalars['Float']>;
  respirationRate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vital_item" */
export type Vital_Item_Variance_Order_By = {
  bodyTemperature?: Maybe<Order_By>;
  heartRate?: Maybe<Order_By>;
  oxygenSaturation?: Maybe<Order_By>;
  respirationRate?: Maybe<Order_By>;
};

export type GetHospitalStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHospitalStatusQuery = (
  { __typename?: 'query_root' }
  & { hospital_status: Array<(
    { __typename?: 'hospital_status' }
    & Pick<Hospital_Status, 'value'>
  )> }
);

export type GetUserSexQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSexQuery = (
  { __typename?: 'query_root' }
  & { user_sex: Array<(
    { __typename?: 'user_sex' }
    & Pick<User_Sex, 'value'>
  )> }
);


export const GetHospitalStatusDocument = gql`
    query GetHospitalStatus {
  hospital_status {
    value
  }
}
    `;
export const GetUserSexDocument = gql`
    query GetUserSex {
  user_sex {
    value
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetHospitalStatus(variables?: GetHospitalStatusQueryVariables): Promise<GetHospitalStatusQuery> {
      return withWrapper(() => client.request<GetHospitalStatusQuery>(print(GetHospitalStatusDocument), variables));
    },
    GetUserSex(variables?: GetUserSexQueryVariables): Promise<GetUserSexQuery> {
      return withWrapper(() => client.request<GetUserSexQuery>(print(GetUserSexDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;