load("@aspect_rules_esbuild//esbuild:defs.bzl", "esbuild")
load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar")
load("@npm//:defs.bzl", "npm_link_all_packages")

# npm_link_all_packages creates this
load("@npm//packages/frontend:typescript/package_json.bzl", "bin")

npm_link_all_packages(name = "node_modules")

COMMON_DEPS = [
    ":node_modules/react",
    ":node_modules/react-dom",
    ":node_modules/@jake/common",
]

# Additional Dependencies Needed When Typechecking
TYPECHECK_DEPS = [
    "//packages/frontend:node_modules/@types/react",
    "//packages/frontend:node_modules/@types/react-dom",
]

esbuild(
    name = "bundle",
    srcs = glob(["src/**/*"]),
    config = {
        "resolveExtensions": [
            ".js",
            ".ts",
        ],
    },
    entry_point = "src/main.tsx",
    deps = COMMON_DEPS,
)

bin.tsc_test(
    name = "typecheck",
    size = "small",
    args = [
        "--noEmit",
        "-p",
        "$(location tsconfig.json)",
    ],
    data = [":tsconfig.json"] + glob(["src/**/*"]) + COMMON_DEPS + TYPECHECK_DEPS,
    tags = [
        "typecheck",
    ],
)
