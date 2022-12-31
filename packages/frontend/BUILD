load("@aspect_rules_esbuild//esbuild:defs.bzl", "esbuild")
load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar")
load("@npm//:defs.bzl", "npm_link_all_packages")
# npm_link_all_packages creates this
load("@npm//packages/frontend:typescript/package_json.bzl", "bin")

npm_link_all_packages(name = "node_modules")

COMMON_DEPS = [
    "//packages/frontend:node_modules/react",
    "//packages/frontend:node_modules/react-dom",
]

TYPECHECK_DEPS = [
    "//packages/frontend:node_modules/@types/react",
    "//packages/frontend:node_modules/@types/react-dom",   
]

esbuild(
    name = "bundle",
    srcs = glob(["src/**/*"]),
    config = {
        "resolveExtensions": [".js"],
    },
    entry_point = "src/main.tsx",
    deps = COMMON_DEPS,
)

bin.tsc_test(
    name = "typecheck",
    args = [
        "--noEmit",

    ],
    data = ["tsconfig.json"] + glob(["src/**/*"])  + COMMON_DEPS + TYPECHECK_DEPS,
)
