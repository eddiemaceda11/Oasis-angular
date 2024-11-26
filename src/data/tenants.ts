type StatusOptions = "In Progress" | "Complete"

type Tenant = {
  name: string;
  unit: number;
  status: StatusOptions;
  createdAt: number;
  dueDate: number
}

export const tenants: Tenant[] = [
  {
    name: "Harry Hayes",
    unit: 34,
    status: "In Progress",
    createdAt: Date.now(),
    dueDate: Date.now()
  }
]