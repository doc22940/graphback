import { GraphQLObjectType, GraphQLOutputType, GraphQLType } from 'graphql';

export interface RelationshipMetadata {
    parent: GraphQLObjectType
    parentField: string
    kind: 'oneToMany' | 'oneToOne' | 'manyToOne'
    relationType: GraphQLObjectType
    relationField: string
    foreignKey?: {
        name: string
        type?: GraphQLType
    }
}