export type ItemData = {
  name: string;
  label: string;
  stack: boolean;
  usable: boolean;
  close: boolean;
  count: number;
  description?: string;
  buttons?: { label: string; group?: string; icon?: string }[];
  ammoName?: string;
  image?: string;
};
