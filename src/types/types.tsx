export type GeneralProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: 'waiting' | 'success';
  /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
  obj: object;
  obj2: {}; // almost the same as `object`, exactly the same as `Object`
  /** an object with any number of properties (PREFERRED) */
  obj3: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  ArrayOfObjects: {
    name: string;
    photo: string;
  }[];
  /** a dict object with any number of properties of the same type */
  dict1: {
    [key: string]: string;
  };
  dict2: Record<string, string>; // equivalent to dict1
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: (event? :React.MouseEvent<HTMLButtonElement>) => void;
  /** function with named prop (VERY COMMON) */
  /** function type syntax that takes an event (VERY COMMON) */
  onChange: (id?: number, event?: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  optional?: any;
};
