export interface LoggerEntry {
  data?: unknown;
  kind?: string;
  message?: string;
}

export interface Logger {
  info(entry: LoggerEntry): void;
  error(entry: LoggerEntry): void;
}

export const logger: Logger = {
  info(entry: LoggerEntry): void {
    const { data, kind, message } = entry;
    console.info(message ?? kind, { kind, message, data });
  },
  error(entry: LoggerEntry): void {
    const { data, kind, message } = entry;
    console.error(message ?? kind, { kind, message, data });
  },
};

export const nullLogger: Logger = {
  info(): void {
    // nothing
  },
  error(): void {
    // nothing
  },
};
