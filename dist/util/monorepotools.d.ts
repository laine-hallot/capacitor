/**
 * Finds the monorepo root from the given path.
 * @param currentPath - The current path to start searching from.
 * @return an object describing the monorepo root and the type of file where the workspace config was detected.
 * @throws An error if the monorepo root is not found.
 */
export declare function findMonorepoRoot(currentPath: string): {
    /**
     * The type of file where the workspace config was detected (ex. json for npm/yarn, yaml for pnpm).
     */
    fileType: 'json' | 'yaml';
    path: string;
};
/**
 * Finds the NX monorepo root from the given path.
 * @param currentPath - The current path to start searching from.
 * @returns The path to the monorepo root.
 * @throws An error if the monorepo root is not found.
 */
export declare function findNXMonorepoRoot(currentPath: string): string;
/**
 * Finds the path to a package within the node_modules folder,
 * searching up the directory hierarchy until the last possible directory is reached.
 * @param packageName - The name of the package to find.
 * @param currentPath - The current path to start searching from.
 * @param lastPossibleDirectory - The last possible directory to search for the package.
 * @returns The path to the package, or null if not found.
 */
export declare function findPackagePath(packageName: string, currentPath: string, lastPossibleDirectory: string): string | null;
/**
 * Finds the relative path to a package from the current directory,
 * using the monorepo root as the last possible directory.
 * @param packageName - The name of the package to find.
 * @param currentPath - The current path to start searching from.
 * @returns The relative path to the package, or null if not found.
 */
export declare function findPackageRelativePathInMonorepo(packageName: string, currentPath: string): string | null;
/**
 * Detects if the current directory is part of a monorepo (npm, yarn, pnpm).
 * @param currentPath - The current path to start searching from.
 * @returns True if the current directory is part of a monorepo, false otherwise.
 */
export declare function isMonorepo(currentPath: string): boolean;
/**
 * Detects if the current directory is part of a nx integrated monorepo.
 * @param currentPath - The current path to start searching from.
 * @returns True if the current directory is part of a monorepo, false otherwise.
 */
export declare function isNXMonorepo(currentPath: string): boolean;
