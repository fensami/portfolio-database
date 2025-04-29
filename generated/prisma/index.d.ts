
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Bike
 * 
 */
export type Bike = $Result.DefaultSelection<Prisma.$BikePayload>
/**
 * Model service
 * 
 */
export type service = $Result.DefaultSelection<Prisma.$servicePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const serviceStatus: {
  PENDING: 'PENDING',
  INPROGRESS: 'INPROGRESS',
  DONE: 'DONE'
};

export type serviceStatus = (typeof serviceStatus)[keyof typeof serviceStatus]

}

export type serviceStatus = $Enums.serviceStatus

export const serviceStatus: typeof $Enums.serviceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bike`: Exposes CRUD operations for the **Bike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bikes
    * const bikes = await prisma.bike.findMany()
    * ```
    */
  get bike(): Prisma.BikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.serviceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Bike: 'Bike',
    service: 'service'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "bike" | "service"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Bike: {
        payload: Prisma.$BikePayload<ExtArgs>
        fields: Prisma.BikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          findFirst: {
            args: Prisma.BikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          findMany: {
            args: Prisma.BikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload>[]
          }
          create: {
            args: Prisma.BikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          createMany: {
            args: Prisma.BikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload>[]
          }
          delete: {
            args: Prisma.BikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          update: {
            args: Prisma.BikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          deleteMany: {
            args: Prisma.BikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload>[]
          }
          upsert: {
            args: Prisma.BikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          aggregate: {
            args: Prisma.BikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBike>
          }
          groupBy: {
            args: Prisma.BikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BikeCountArgs<ExtArgs>
            result: $Utils.Optional<BikeCountAggregateOutputType> | number
          }
        }
      }
      service: {
        payload: Prisma.$servicePayload<ExtArgs>
        fields: Prisma.serviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          findFirst: {
            args: Prisma.serviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          findMany: {
            args: Prisma.serviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>[]
          }
          create: {
            args: Prisma.serviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          createMany: {
            args: Prisma.serviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.serviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>[]
          }
          delete: {
            args: Prisma.serviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          update: {
            args: Prisma.serviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          deleteMany: {
            args: Prisma.serviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.serviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>[]
          }
          upsert: {
            args: Prisma.serviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.serviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.serviceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    bike?: BikeOmit
    service?: serviceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    Bike: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bike?: boolean | CustomerCountOutputTypeCountBikeArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Bike?: boolean | Customer$BikeArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bike?: boolean | Customer$BikeArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      Bike: Prisma.$BikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bike<T extends Customer$BikeArgs<ExtArgs> = {}>(args?: Subset<T, Customer$BikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.Bike
   */
  export type Customer$BikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    where?: BikeWhereInput
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    cursor?: BikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Bike
   */

  export type AggregateBike = {
    _count: BikeCountAggregateOutputType | null
    _avg: BikeAvgAggregateOutputType | null
    _sum: BikeSumAggregateOutputType | null
    _min: BikeMinAggregateOutputType | null
    _max: BikeMaxAggregateOutputType | null
  }

  export type BikeAvgAggregateOutputType = {
    year: number | null
  }

  export type BikeSumAggregateOutputType = {
    year: number | null
  }

  export type BikeMinAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    customerId: string | null
  }

  export type BikeMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    customerId: string | null
  }

  export type BikeCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    year: number
    customerId: number
    _all: number
  }


  export type BikeAvgAggregateInputType = {
    year?: true
  }

  export type BikeSumAggregateInputType = {
    year?: true
  }

  export type BikeMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    customerId?: true
  }

  export type BikeMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    customerId?: true
  }

  export type BikeCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    customerId?: true
    _all?: true
  }

  export type BikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bike to aggregate.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bikes
    **/
    _count?: true | BikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BikeMaxAggregateInputType
  }

  export type GetBikeAggregateType<T extends BikeAggregateArgs> = {
        [P in keyof T & keyof AggregateBike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBike[P]>
      : GetScalarType<T[P], AggregateBike[P]>
  }




  export type BikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BikeWhereInput
    orderBy?: BikeOrderByWithAggregationInput | BikeOrderByWithAggregationInput[]
    by: BikeScalarFieldEnum[] | BikeScalarFieldEnum
    having?: BikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BikeCountAggregateInputType | true
    _avg?: BikeAvgAggregateInputType
    _sum?: BikeSumAggregateInputType
    _min?: BikeMinAggregateInputType
    _max?: BikeMaxAggregateInputType
  }

  export type BikeGroupByOutputType = {
    id: string
    brand: string
    model: string
    year: number
    customerId: string
    _count: BikeCountAggregateOutputType | null
    _avg: BikeAvgAggregateOutputType | null
    _sum: BikeSumAggregateOutputType | null
    _min: BikeMinAggregateOutputType | null
    _max: BikeMaxAggregateOutputType | null
  }

  type GetBikeGroupByPayload<T extends BikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BikeGroupByOutputType[P]>
            : GetScalarType<T[P], BikeGroupByOutputType[P]>
        }
      >
    >


  export type BikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | Bike$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["bike"]>

  export type BikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bike"]>

  export type BikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bike"]>

  export type BikeSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    customerId?: boolean
  }

  export type BikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "model" | "year" | "customerId", ExtArgs["result"]["bike"]>
  export type BikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | Bike$serviceArgs<ExtArgs>
  }
  export type BikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type BikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $BikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bike"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      service: Prisma.$servicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brand: string
      model: string
      year: number
      customerId: string
    }, ExtArgs["result"]["bike"]>
    composites: {}
  }

  type BikeGetPayload<S extends boolean | null | undefined | BikeDefaultArgs> = $Result.GetResult<Prisma.$BikePayload, S>

  type BikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BikeCountAggregateInputType | true
    }

  export interface BikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bike'], meta: { name: 'Bike' } }
    /**
     * Find zero or one Bike that matches the filter.
     * @param {BikeFindUniqueArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BikeFindUniqueArgs>(args: SelectSubset<T, BikeFindUniqueArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BikeFindUniqueOrThrowArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BikeFindUniqueOrThrowArgs>(args: SelectSubset<T, BikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeFindFirstArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BikeFindFirstArgs>(args?: SelectSubset<T, BikeFindFirstArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeFindFirstOrThrowArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BikeFindFirstOrThrowArgs>(args?: SelectSubset<T, BikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bikes
     * const bikes = await prisma.bike.findMany()
     * 
     * // Get first 10 Bikes
     * const bikes = await prisma.bike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bikeWithIdOnly = await prisma.bike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BikeFindManyArgs>(args?: SelectSubset<T, BikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bike.
     * @param {BikeCreateArgs} args - Arguments to create a Bike.
     * @example
     * // Create one Bike
     * const Bike = await prisma.bike.create({
     *   data: {
     *     // ... data to create a Bike
     *   }
     * })
     * 
     */
    create<T extends BikeCreateArgs>(args: SelectSubset<T, BikeCreateArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bikes.
     * @param {BikeCreateManyArgs} args - Arguments to create many Bikes.
     * @example
     * // Create many Bikes
     * const bike = await prisma.bike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BikeCreateManyArgs>(args?: SelectSubset<T, BikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bikes and returns the data saved in the database.
     * @param {BikeCreateManyAndReturnArgs} args - Arguments to create many Bikes.
     * @example
     * // Create many Bikes
     * const bike = await prisma.bike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bikes and only return the `id`
     * const bikeWithIdOnly = await prisma.bike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BikeCreateManyAndReturnArgs>(args?: SelectSubset<T, BikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bike.
     * @param {BikeDeleteArgs} args - Arguments to delete one Bike.
     * @example
     * // Delete one Bike
     * const Bike = await prisma.bike.delete({
     *   where: {
     *     // ... filter to delete one Bike
     *   }
     * })
     * 
     */
    delete<T extends BikeDeleteArgs>(args: SelectSubset<T, BikeDeleteArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bike.
     * @param {BikeUpdateArgs} args - Arguments to update one Bike.
     * @example
     * // Update one Bike
     * const bike = await prisma.bike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BikeUpdateArgs>(args: SelectSubset<T, BikeUpdateArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bikes.
     * @param {BikeDeleteManyArgs} args - Arguments to filter Bikes to delete.
     * @example
     * // Delete a few Bikes
     * const { count } = await prisma.bike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BikeDeleteManyArgs>(args?: SelectSubset<T, BikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bikes
     * const bike = await prisma.bike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BikeUpdateManyArgs>(args: SelectSubset<T, BikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bikes and returns the data updated in the database.
     * @param {BikeUpdateManyAndReturnArgs} args - Arguments to update many Bikes.
     * @example
     * // Update many Bikes
     * const bike = await prisma.bike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bikes and only return the `id`
     * const bikeWithIdOnly = await prisma.bike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BikeUpdateManyAndReturnArgs>(args: SelectSubset<T, BikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bike.
     * @param {BikeUpsertArgs} args - Arguments to update or create a Bike.
     * @example
     * // Update or create a Bike
     * const bike = await prisma.bike.upsert({
     *   create: {
     *     // ... data to create a Bike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bike we want to update
     *   }
     * })
     */
    upsert<T extends BikeUpsertArgs>(args: SelectSubset<T, BikeUpsertArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeCountArgs} args - Arguments to filter Bikes to count.
     * @example
     * // Count the number of Bikes
     * const count = await prisma.bike.count({
     *   where: {
     *     // ... the filter for the Bikes we want to count
     *   }
     * })
    **/
    count<T extends BikeCountArgs>(
      args?: Subset<T, BikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BikeAggregateArgs>(args: Subset<T, BikeAggregateArgs>): Prisma.PrismaPromise<GetBikeAggregateType<T>>

    /**
     * Group by Bike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BikeGroupByArgs['orderBy'] }
        : { orderBy?: BikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bike model
   */
  readonly fields: BikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends Bike$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Bike$serviceArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bike model
   */
  interface BikeFieldRefs {
    readonly id: FieldRef<"Bike", 'String'>
    readonly brand: FieldRef<"Bike", 'String'>
    readonly model: FieldRef<"Bike", 'String'>
    readonly year: FieldRef<"Bike", 'Int'>
    readonly customerId: FieldRef<"Bike", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bike findUnique
   */
  export type BikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where: BikeWhereUniqueInput
  }

  /**
   * Bike findUniqueOrThrow
   */
  export type BikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where: BikeWhereUniqueInput
  }

  /**
   * Bike findFirst
   */
  export type BikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bikes.
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bikes.
     */
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }

  /**
   * Bike findFirstOrThrow
   */
  export type BikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bikes.
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bikes.
     */
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }

  /**
   * Bike findMany
   */
  export type BikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bikes to fetch.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bikes.
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }

  /**
   * Bike create
   */
  export type BikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Bike.
     */
    data: XOR<BikeCreateInput, BikeUncheckedCreateInput>
  }

  /**
   * Bike createMany
   */
  export type BikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bikes.
     */
    data: BikeCreateManyInput | BikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bike createManyAndReturn
   */
  export type BikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * The data used to create many Bikes.
     */
    data: BikeCreateManyInput | BikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bike update
   */
  export type BikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Bike.
     */
    data: XOR<BikeUpdateInput, BikeUncheckedUpdateInput>
    /**
     * Choose, which Bike to update.
     */
    where: BikeWhereUniqueInput
  }

  /**
   * Bike updateMany
   */
  export type BikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bikes.
     */
    data: XOR<BikeUpdateManyMutationInput, BikeUncheckedUpdateManyInput>
    /**
     * Filter which Bikes to update
     */
    where?: BikeWhereInput
    /**
     * Limit how many Bikes to update.
     */
    limit?: number
  }

  /**
   * Bike updateManyAndReturn
   */
  export type BikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * The data used to update Bikes.
     */
    data: XOR<BikeUpdateManyMutationInput, BikeUncheckedUpdateManyInput>
    /**
     * Filter which Bikes to update
     */
    where?: BikeWhereInput
    /**
     * Limit how many Bikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bike upsert
   */
  export type BikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Bike to update in case it exists.
     */
    where: BikeWhereUniqueInput
    /**
     * In case the Bike found by the `where` argument doesn't exist, create a new Bike with this data.
     */
    create: XOR<BikeCreateInput, BikeUncheckedCreateInput>
    /**
     * In case the Bike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BikeUpdateInput, BikeUncheckedUpdateInput>
  }

  /**
   * Bike delete
   */
  export type BikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter which Bike to delete.
     */
    where: BikeWhereUniqueInput
  }

  /**
   * Bike deleteMany
   */
  export type BikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bikes to delete
     */
    where?: BikeWhereInput
    /**
     * Limit how many Bikes to delete.
     */
    limit?: number
  }

  /**
   * Bike.service
   */
  export type Bike$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    where?: serviceWhereInput
  }

  /**
   * Bike without action
   */
  export type BikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bike
     */
    omit?: BikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BikeInclude<ExtArgs> | null
  }


  /**
   * Model service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    bikeId: string | null
    serviceDate: Date | null
    completionDate: Date | null
    description: string | null
    status: $Enums.serviceStatus | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    bikeId: string | null
    serviceDate: Date | null
    completionDate: Date | null
    description: string | null
    status: $Enums.serviceStatus | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    bikeId: number
    serviceDate: number
    completionDate: number
    description: number
    status: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    bikeId?: true
    serviceDate?: true
    completionDate?: true
    description?: true
    status?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    bikeId?: true
    serviceDate?: true
    completionDate?: true
    description?: true
    status?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    bikeId?: true
    serviceDate?: true
    completionDate?: true
    description?: true
    status?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which service to aggregate.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type serviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviceWhereInput
    orderBy?: serviceOrderByWithAggregationInput | serviceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: serviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    bikeId: string
    serviceDate: Date
    completionDate: Date | null
    description: string
    status: $Enums.serviceStatus
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends serviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type serviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bikeId?: boolean
    serviceDate?: boolean
    completionDate?: boolean
    description?: boolean
    status?: boolean
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type serviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bikeId?: boolean
    serviceDate?: boolean
    completionDate?: boolean
    description?: boolean
    status?: boolean
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type serviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bikeId?: boolean
    serviceDate?: boolean
    completionDate?: boolean
    description?: boolean
    status?: boolean
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type serviceSelectScalar = {
    id?: boolean
    bikeId?: boolean
    serviceDate?: boolean
    completionDate?: boolean
    description?: boolean
    status?: boolean
  }

  export type serviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bikeId" | "serviceDate" | "completionDate" | "description" | "status", ExtArgs["result"]["service"]>
  export type serviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }
  export type serviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }
  export type serviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }

  export type $servicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "service"
    objects: {
      bike: Prisma.$BikePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bikeId: string
      serviceDate: Date
      completionDate: Date | null
      description: string
      status: $Enums.serviceStatus
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type serviceGetPayload<S extends boolean | null | undefined | serviceDefaultArgs> = $Result.GetResult<Prisma.$servicePayload, S>

  type serviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<serviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface serviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['service'], meta: { name: 'service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {serviceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serviceFindUniqueArgs>(args: SelectSubset<T, serviceFindUniqueArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {serviceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serviceFindUniqueOrThrowArgs>(args: SelectSubset<T, serviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serviceFindFirstArgs>(args?: SelectSubset<T, serviceFindFirstArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serviceFindFirstOrThrowArgs>(args?: SelectSubset<T, serviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends serviceFindManyArgs>(args?: SelectSubset<T, serviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {serviceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends serviceCreateArgs>(args: SelectSubset<T, serviceCreateArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {serviceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serviceCreateManyArgs>(args?: SelectSubset<T, serviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {serviceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends serviceCreateManyAndReturnArgs>(args?: SelectSubset<T, serviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {serviceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends serviceDeleteArgs>(args: SelectSubset<T, serviceDeleteArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {serviceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serviceUpdateArgs>(args: SelectSubset<T, serviceUpdateArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {serviceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serviceDeleteManyArgs>(args?: SelectSubset<T, serviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serviceUpdateManyArgs>(args: SelectSubset<T, serviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {serviceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends serviceUpdateManyAndReturnArgs>(args: SelectSubset<T, serviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {serviceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends serviceUpsertArgs>(args: SelectSubset<T, serviceUpsertArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends serviceCountArgs>(
      args?: Subset<T, serviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends serviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serviceGroupByArgs['orderBy'] }
        : { orderBy?: serviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, serviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the service model
   */
  readonly fields: serviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bike<T extends BikeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BikeDefaultArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the service model
   */
  interface serviceFieldRefs {
    readonly id: FieldRef<"service", 'String'>
    readonly bikeId: FieldRef<"service", 'String'>
    readonly serviceDate: FieldRef<"service", 'DateTime'>
    readonly completionDate: FieldRef<"service", 'DateTime'>
    readonly description: FieldRef<"service", 'String'>
    readonly status: FieldRef<"service", 'serviceStatus'>
  }
    

  // Custom InputTypes
  /**
   * service findUnique
   */
  export type serviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service findUniqueOrThrow
   */
  export type serviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service findFirst
   */
  export type serviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * service findFirstOrThrow
   */
  export type serviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * service findMany
   */
  export type serviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * service create
   */
  export type serviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * The data needed to create a service.
     */
    data: XOR<serviceCreateInput, serviceUncheckedCreateInput>
  }

  /**
   * service createMany
   */
  export type serviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: serviceCreateManyInput | serviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * service createManyAndReturn
   */
  export type serviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * The data used to create many services.
     */
    data: serviceCreateManyInput | serviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * service update
   */
  export type serviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * The data needed to update a service.
     */
    data: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>
    /**
     * Choose, which service to update.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service updateMany
   */
  export type serviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: serviceWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * service updateManyAndReturn
   */
  export type serviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * The data used to update services.
     */
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: serviceWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * service upsert
   */
  export type serviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * The filter to search for the service to update in case it exists.
     */
    where: serviceWhereUniqueInput
    /**
     * In case the service found by the `where` argument doesn't exist, create a new service with this data.
     */
    create: XOR<serviceCreateInput, serviceUncheckedCreateInput>
    /**
     * In case the service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>
  }

  /**
   * service delete
   */
  export type serviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter which service to delete.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service deleteMany
   */
  export type serviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: serviceWhereInput
    /**
     * Limit how many services to delete.
     */
    limit?: number
  }

  /**
   * service without action
   */
  export type serviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const BikeScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    year: 'year',
    customerId: 'customerId'
  };

  export type BikeScalarFieldEnum = (typeof BikeScalarFieldEnum)[keyof typeof BikeScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    bikeId: 'bikeId',
    serviceDate: 'serviceDate',
    completionDate: 'completionDate',
    description: 'description',
    status: 'status'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'serviceStatus'
   */
  export type EnumserviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'serviceStatus'>
    


  /**
   * Reference to a field of type 'serviceStatus[]'
   */
  export type ListEnumserviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'serviceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    Bike?: BikeListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Bike?: BikeOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    Bike?: BikeListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type BikeWhereInput = {
    AND?: BikeWhereInput | BikeWhereInput[]
    OR?: BikeWhereInput[]
    NOT?: BikeWhereInput | BikeWhereInput[]
    id?: StringFilter<"Bike"> | string
    brand?: StringFilter<"Bike"> | string
    model?: StringFilter<"Bike"> | string
    year?: IntFilter<"Bike"> | number
    customerId?: StringFilter<"Bike"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, serviceWhereInput> | null
  }

  export type BikeOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    customerId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    service?: serviceOrderByWithRelationInput
  }

  export type BikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customerId?: string
    AND?: BikeWhereInput | BikeWhereInput[]
    OR?: BikeWhereInput[]
    NOT?: BikeWhereInput | BikeWhereInput[]
    brand?: StringFilter<"Bike"> | string
    model?: StringFilter<"Bike"> | string
    year?: IntFilter<"Bike"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, serviceWhereInput> | null
  }, "id" | "customerId">

  export type BikeOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    customerId?: SortOrder
    _count?: BikeCountOrderByAggregateInput
    _avg?: BikeAvgOrderByAggregateInput
    _max?: BikeMaxOrderByAggregateInput
    _min?: BikeMinOrderByAggregateInput
    _sum?: BikeSumOrderByAggregateInput
  }

  export type BikeScalarWhereWithAggregatesInput = {
    AND?: BikeScalarWhereWithAggregatesInput | BikeScalarWhereWithAggregatesInput[]
    OR?: BikeScalarWhereWithAggregatesInput[]
    NOT?: BikeScalarWhereWithAggregatesInput | BikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bike"> | string
    brand?: StringWithAggregatesFilter<"Bike"> | string
    model?: StringWithAggregatesFilter<"Bike"> | string
    year?: IntWithAggregatesFilter<"Bike"> | number
    customerId?: StringWithAggregatesFilter<"Bike"> | string
  }

  export type serviceWhereInput = {
    AND?: serviceWhereInput | serviceWhereInput[]
    OR?: serviceWhereInput[]
    NOT?: serviceWhereInput | serviceWhereInput[]
    id?: StringFilter<"service"> | string
    bikeId?: StringFilter<"service"> | string
    serviceDate?: DateTimeFilter<"service"> | Date | string
    completionDate?: DateTimeNullableFilter<"service"> | Date | string | null
    description?: StringFilter<"service"> | string
    status?: EnumserviceStatusFilter<"service"> | $Enums.serviceStatus
    bike?: XOR<BikeScalarRelationFilter, BikeWhereInput>
  }

  export type serviceOrderByWithRelationInput = {
    id?: SortOrder
    bikeId?: SortOrder
    serviceDate?: SortOrder
    completionDate?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    bike?: BikeOrderByWithRelationInput
  }

  export type serviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bikeId?: string
    AND?: serviceWhereInput | serviceWhereInput[]
    OR?: serviceWhereInput[]
    NOT?: serviceWhereInput | serviceWhereInput[]
    serviceDate?: DateTimeFilter<"service"> | Date | string
    completionDate?: DateTimeNullableFilter<"service"> | Date | string | null
    description?: StringFilter<"service"> | string
    status?: EnumserviceStatusFilter<"service"> | $Enums.serviceStatus
    bike?: XOR<BikeScalarRelationFilter, BikeWhereInput>
  }, "id" | "bikeId">

  export type serviceOrderByWithAggregationInput = {
    id?: SortOrder
    bikeId?: SortOrder
    serviceDate?: SortOrder
    completionDate?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    _count?: serviceCountOrderByAggregateInput
    _max?: serviceMaxOrderByAggregateInput
    _min?: serviceMinOrderByAggregateInput
  }

  export type serviceScalarWhereWithAggregatesInput = {
    AND?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[]
    OR?: serviceScalarWhereWithAggregatesInput[]
    NOT?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"service"> | string
    bikeId?: StringWithAggregatesFilter<"service"> | string
    serviceDate?: DateTimeWithAggregatesFilter<"service"> | Date | string
    completionDate?: DateTimeNullableWithAggregatesFilter<"service"> | Date | string | null
    description?: StringWithAggregatesFilter<"service"> | string
    status?: EnumserviceStatusWithAggregatesFilter<"service"> | $Enums.serviceStatus
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Bike?: BikeCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Bike?: BikeUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bike?: BikeUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bike?: BikeUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BikeCreateInput = {
    id?: string
    brand: string
    model: string
    year: number
    customer: CustomerCreateNestedOneWithoutBikeInput
    service?: serviceCreateNestedOneWithoutBikeInput
  }

  export type BikeUncheckedCreateInput = {
    id?: string
    brand: string
    model: string
    year: number
    customerId: string
    service?: serviceUncheckedCreateNestedOneWithoutBikeInput
  }

  export type BikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutBikeNestedInput
    service?: serviceUpdateOneWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    service?: serviceUncheckedUpdateOneWithoutBikeNestedInput
  }

  export type BikeCreateManyInput = {
    id?: string
    brand: string
    model: string
    year: number
    customerId: string
  }

  export type BikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type BikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type serviceCreateInput = {
    id?: string
    serviceDate: Date | string
    completionDate?: Date | string | null
    description: string
    status: $Enums.serviceStatus
    bike: BikeCreateNestedOneWithoutServiceInput
  }

  export type serviceUncheckedCreateInput = {
    id?: string
    bikeId: string
    serviceDate: Date | string
    completionDate?: Date | string | null
    description: string
    status: $Enums.serviceStatus
  }

  export type serviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    bike?: BikeUpdateOneRequiredWithoutServiceNestedInput
  }

  export type serviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
  }

  export type serviceCreateManyInput = {
    id?: string
    bikeId: string
    serviceDate: Date | string
    completionDate?: Date | string | null
    description: string
    status: $Enums.serviceStatus
  }

  export type serviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
  }

  export type serviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BikeListRelationFilter = {
    every?: BikeWhereInput
    some?: BikeWhereInput
    none?: BikeWhereInput
  }

  export type BikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: serviceWhereInput | null
    isNot?: serviceWhereInput | null
  }

  export type BikeCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    customerId?: SortOrder
  }

  export type BikeAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type BikeMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    customerId?: SortOrder
  }

  export type BikeMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    customerId?: SortOrder
  }

  export type BikeSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumserviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.serviceStatus | EnumserviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumserviceStatusFilter<$PrismaModel> | $Enums.serviceStatus
  }

  export type BikeScalarRelationFilter = {
    is?: BikeWhereInput
    isNot?: BikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type serviceCountOrderByAggregateInput = {
    id?: SortOrder
    bikeId?: SortOrder
    serviceDate?: SortOrder
    completionDate?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type serviceMaxOrderByAggregateInput = {
    id?: SortOrder
    bikeId?: SortOrder
    serviceDate?: SortOrder
    completionDate?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type serviceMinOrderByAggregateInput = {
    id?: SortOrder
    bikeId?: SortOrder
    serviceDate?: SortOrder
    completionDate?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumserviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.serviceStatus | EnumserviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumserviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.serviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumserviceStatusFilter<$PrismaModel>
    _max?: NestedEnumserviceStatusFilter<$PrismaModel>
  }

  export type BikeCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BikeCreateWithoutCustomerInput, BikeUncheckedCreateWithoutCustomerInput> | BikeCreateWithoutCustomerInput[] | BikeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BikeCreateOrConnectWithoutCustomerInput | BikeCreateOrConnectWithoutCustomerInput[]
    createMany?: BikeCreateManyCustomerInputEnvelope
    connect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
  }

  export type BikeUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BikeCreateWithoutCustomerInput, BikeUncheckedCreateWithoutCustomerInput> | BikeCreateWithoutCustomerInput[] | BikeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BikeCreateOrConnectWithoutCustomerInput | BikeCreateOrConnectWithoutCustomerInput[]
    createMany?: BikeCreateManyCustomerInputEnvelope
    connect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BikeUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BikeCreateWithoutCustomerInput, BikeUncheckedCreateWithoutCustomerInput> | BikeCreateWithoutCustomerInput[] | BikeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BikeCreateOrConnectWithoutCustomerInput | BikeCreateOrConnectWithoutCustomerInput[]
    upsert?: BikeUpsertWithWhereUniqueWithoutCustomerInput | BikeUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BikeCreateManyCustomerInputEnvelope
    set?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    disconnect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    delete?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    connect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    update?: BikeUpdateWithWhereUniqueWithoutCustomerInput | BikeUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BikeUpdateManyWithWhereWithoutCustomerInput | BikeUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BikeScalarWhereInput | BikeScalarWhereInput[]
  }

  export type BikeUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BikeCreateWithoutCustomerInput, BikeUncheckedCreateWithoutCustomerInput> | BikeCreateWithoutCustomerInput[] | BikeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BikeCreateOrConnectWithoutCustomerInput | BikeCreateOrConnectWithoutCustomerInput[]
    upsert?: BikeUpsertWithWhereUniqueWithoutCustomerInput | BikeUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BikeCreateManyCustomerInputEnvelope
    set?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    disconnect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    delete?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    connect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    update?: BikeUpdateWithWhereUniqueWithoutCustomerInput | BikeUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BikeUpdateManyWithWhereWithoutCustomerInput | BikeUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BikeScalarWhereInput | BikeScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutBikeInput = {
    create?: XOR<CustomerCreateWithoutBikeInput, CustomerUncheckedCreateWithoutBikeInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBikeInput
    connect?: CustomerWhereUniqueInput
  }

  export type serviceCreateNestedOneWithoutBikeInput = {
    create?: XOR<serviceCreateWithoutBikeInput, serviceUncheckedCreateWithoutBikeInput>
    connectOrCreate?: serviceCreateOrConnectWithoutBikeInput
    connect?: serviceWhereUniqueInput
  }

  export type serviceUncheckedCreateNestedOneWithoutBikeInput = {
    create?: XOR<serviceCreateWithoutBikeInput, serviceUncheckedCreateWithoutBikeInput>
    connectOrCreate?: serviceCreateOrConnectWithoutBikeInput
    connect?: serviceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneRequiredWithoutBikeNestedInput = {
    create?: XOR<CustomerCreateWithoutBikeInput, CustomerUncheckedCreateWithoutBikeInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBikeInput
    upsert?: CustomerUpsertWithoutBikeInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBikeInput, CustomerUpdateWithoutBikeInput>, CustomerUncheckedUpdateWithoutBikeInput>
  }

  export type serviceUpdateOneWithoutBikeNestedInput = {
    create?: XOR<serviceCreateWithoutBikeInput, serviceUncheckedCreateWithoutBikeInput>
    connectOrCreate?: serviceCreateOrConnectWithoutBikeInput
    upsert?: serviceUpsertWithoutBikeInput
    disconnect?: serviceWhereInput | boolean
    delete?: serviceWhereInput | boolean
    connect?: serviceWhereUniqueInput
    update?: XOR<XOR<serviceUpdateToOneWithWhereWithoutBikeInput, serviceUpdateWithoutBikeInput>, serviceUncheckedUpdateWithoutBikeInput>
  }

  export type serviceUncheckedUpdateOneWithoutBikeNestedInput = {
    create?: XOR<serviceCreateWithoutBikeInput, serviceUncheckedCreateWithoutBikeInput>
    connectOrCreate?: serviceCreateOrConnectWithoutBikeInput
    upsert?: serviceUpsertWithoutBikeInput
    disconnect?: serviceWhereInput | boolean
    delete?: serviceWhereInput | boolean
    connect?: serviceWhereUniqueInput
    update?: XOR<XOR<serviceUpdateToOneWithWhereWithoutBikeInput, serviceUpdateWithoutBikeInput>, serviceUncheckedUpdateWithoutBikeInput>
  }

  export type BikeCreateNestedOneWithoutServiceInput = {
    create?: XOR<BikeCreateWithoutServiceInput, BikeUncheckedCreateWithoutServiceInput>
    connectOrCreate?: BikeCreateOrConnectWithoutServiceInput
    connect?: BikeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumserviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.serviceStatus
  }

  export type BikeUpdateOneRequiredWithoutServiceNestedInput = {
    create?: XOR<BikeCreateWithoutServiceInput, BikeUncheckedCreateWithoutServiceInput>
    connectOrCreate?: BikeCreateOrConnectWithoutServiceInput
    upsert?: BikeUpsertWithoutServiceInput
    connect?: BikeWhereUniqueInput
    update?: XOR<XOR<BikeUpdateToOneWithWhereWithoutServiceInput, BikeUpdateWithoutServiceInput>, BikeUncheckedUpdateWithoutServiceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumserviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.serviceStatus | EnumserviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumserviceStatusFilter<$PrismaModel> | $Enums.serviceStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumserviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.serviceStatus | EnumserviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumserviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.serviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumserviceStatusFilter<$PrismaModel>
    _max?: NestedEnumserviceStatusFilter<$PrismaModel>
  }

  export type BikeCreateWithoutCustomerInput = {
    id?: string
    brand: string
    model: string
    year: number
    service?: serviceCreateNestedOneWithoutBikeInput
  }

  export type BikeUncheckedCreateWithoutCustomerInput = {
    id?: string
    brand: string
    model: string
    year: number
    service?: serviceUncheckedCreateNestedOneWithoutBikeInput
  }

  export type BikeCreateOrConnectWithoutCustomerInput = {
    where: BikeWhereUniqueInput
    create: XOR<BikeCreateWithoutCustomerInput, BikeUncheckedCreateWithoutCustomerInput>
  }

  export type BikeCreateManyCustomerInputEnvelope = {
    data: BikeCreateManyCustomerInput | BikeCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BikeUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BikeWhereUniqueInput
    update: XOR<BikeUpdateWithoutCustomerInput, BikeUncheckedUpdateWithoutCustomerInput>
    create: XOR<BikeCreateWithoutCustomerInput, BikeUncheckedCreateWithoutCustomerInput>
  }

  export type BikeUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BikeWhereUniqueInput
    data: XOR<BikeUpdateWithoutCustomerInput, BikeUncheckedUpdateWithoutCustomerInput>
  }

  export type BikeUpdateManyWithWhereWithoutCustomerInput = {
    where: BikeScalarWhereInput
    data: XOR<BikeUpdateManyMutationInput, BikeUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BikeScalarWhereInput = {
    AND?: BikeScalarWhereInput | BikeScalarWhereInput[]
    OR?: BikeScalarWhereInput[]
    NOT?: BikeScalarWhereInput | BikeScalarWhereInput[]
    id?: StringFilter<"Bike"> | string
    brand?: StringFilter<"Bike"> | string
    model?: StringFilter<"Bike"> | string
    year?: IntFilter<"Bike"> | number
    customerId?: StringFilter<"Bike"> | string
  }

  export type CustomerCreateWithoutBikeInput = {
    id?: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutBikeInput = {
    id?: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutBikeInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBikeInput, CustomerUncheckedCreateWithoutBikeInput>
  }

  export type serviceCreateWithoutBikeInput = {
    id?: string
    serviceDate: Date | string
    completionDate?: Date | string | null
    description: string
    status: $Enums.serviceStatus
  }

  export type serviceUncheckedCreateWithoutBikeInput = {
    id?: string
    serviceDate: Date | string
    completionDate?: Date | string | null
    description: string
    status: $Enums.serviceStatus
  }

  export type serviceCreateOrConnectWithoutBikeInput = {
    where: serviceWhereUniqueInput
    create: XOR<serviceCreateWithoutBikeInput, serviceUncheckedCreateWithoutBikeInput>
  }

  export type CustomerUpsertWithoutBikeInput = {
    update: XOR<CustomerUpdateWithoutBikeInput, CustomerUncheckedUpdateWithoutBikeInput>
    create: XOR<CustomerCreateWithoutBikeInput, CustomerUncheckedCreateWithoutBikeInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBikeInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBikeInput, CustomerUncheckedUpdateWithoutBikeInput>
  }

  export type CustomerUpdateWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviceUpsertWithoutBikeInput = {
    update: XOR<serviceUpdateWithoutBikeInput, serviceUncheckedUpdateWithoutBikeInput>
    create: XOR<serviceCreateWithoutBikeInput, serviceUncheckedCreateWithoutBikeInput>
    where?: serviceWhereInput
  }

  export type serviceUpdateToOneWithWhereWithoutBikeInput = {
    where?: serviceWhereInput
    data: XOR<serviceUpdateWithoutBikeInput, serviceUncheckedUpdateWithoutBikeInput>
  }

  export type serviceUpdateWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
  }

  export type serviceUncheckedUpdateWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
  }

  export type BikeCreateWithoutServiceInput = {
    id?: string
    brand: string
    model: string
    year: number
    customer: CustomerCreateNestedOneWithoutBikeInput
  }

  export type BikeUncheckedCreateWithoutServiceInput = {
    id?: string
    brand: string
    model: string
    year: number
    customerId: string
  }

  export type BikeCreateOrConnectWithoutServiceInput = {
    where: BikeWhereUniqueInput
    create: XOR<BikeCreateWithoutServiceInput, BikeUncheckedCreateWithoutServiceInput>
  }

  export type BikeUpsertWithoutServiceInput = {
    update: XOR<BikeUpdateWithoutServiceInput, BikeUncheckedUpdateWithoutServiceInput>
    create: XOR<BikeCreateWithoutServiceInput, BikeUncheckedCreateWithoutServiceInput>
    where?: BikeWhereInput
  }

  export type BikeUpdateToOneWithWhereWithoutServiceInput = {
    where?: BikeWhereInput
    data: XOR<BikeUpdateWithoutServiceInput, BikeUncheckedUpdateWithoutServiceInput>
  }

  export type BikeUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type BikeCreateManyCustomerInput = {
    id?: string
    brand: string
    model: string
    year: number
  }

  export type BikeUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    service?: serviceUpdateOneWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    service?: serviceUncheckedUpdateOneWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}