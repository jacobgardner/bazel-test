load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@aspect_rules_js//npm:defs.bzl", "npm_package")
load("@bazel_skylib//lib:partial.bzl", "partial")

ts_project(
    name = "common_ts",
    srcs = glob(["src/**"]),
    declaration = True,
    out_dir = "lib",
    root_dir = "src",
    transpiler = partial.make(
        swc,
        out_dir = "lib",
        root_dir = "src",
        source_maps = "true",
    ),
)

npm_package(
    name = "common",
    srcs = [
        "package.json",
        ":common_ts",
    ],
    visibility = ["//visibility:public"],
)
