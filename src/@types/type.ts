import { Static, TSchema, Type } from "@fastify/type-provider-typebox";

const base = Type.Object({
  code: Type.Number(),
  message: Type.Optional(Type.String()),
});

export const BaseType = <T extends TSchema | null = null>(obj: T) =>
  obj ? Type.Intersect([base, obj]) : base;

export type BaseResType = Static<typeof base>;

export const UserNotFoundResponse = base;
