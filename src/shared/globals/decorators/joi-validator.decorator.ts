import { JoiRequestValidation } from '@global/helpers/errors-handelers';
import { Request } from 'express';
import { ObjectSchema } from 'joi';

type JoiDecorator = (target: never, key: string, descriptor: PropertyDescriptor) => void;

export function joiValidation(schema:ObjectSchema):JoiDecorator {
  return (_target:never,_key:string,descriptor:PropertyDescriptor)=>{
    const originalMethod = descriptor.value;
    descriptor.value = async function(...args: never[]){
      const req: Request = args[0];
      const {error} = await Promise.resolve(schema.validate(req.body));
      if(error?.details){
        throw new JoiRequestValidation(error.details[0].message);
      }
      return originalMethod.apply(this,args);
    };
    return descriptor;
  };
}
