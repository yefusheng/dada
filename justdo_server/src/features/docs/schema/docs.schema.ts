import { Schema } from 'mongoose';
import { schemaOptions } from '../../../shared/shared.model';
import {DocsDefinition} from "./docs.definition";

export const DocsSchema = new Schema(DocsDefinition, schemaOptions);
export const Docs_MODEL = 'Docs';
