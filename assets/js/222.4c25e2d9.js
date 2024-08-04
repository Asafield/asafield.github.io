(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{537:function(e,t,i){"use strict";i.r(t);var a=i(8),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"u-boot-makefile-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#u-boot-makefile-analysis"}},[e._v("#")]),e._v(" u-boot makefile analysis")]),e._v(" "),t("h2",{attrs:{id:"some-configuration-in-make"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#some-configuration-in-make"}},[e._v("#")]),e._v(" some configuration in make")]),e._v(" "),t("ul",[t("li",[e._v("some infomation:\n"),t("ul",[t("li",[e._v("version...")])])]),e._v(" "),t("li",[e._v("MAKEFLAGS: -rR --include-dir\n"),t("ul",[t("li",[e._v("forbidden the build-in rules in makefile")])])]),e._v(" "),t("li",[e._v("use the c-stand character and numeric format")])]),e._v(" "),t("h2",{attrs:{id:"configure-the-message-outputed-when-make"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-message-outputed-when-make"}},[e._v("#")]),e._v(" configure the message outputed when make")]),e._v(" "),t("ul",[t("li",[e._v("v")]),e._v(" "),t("li",[e._v("quiet")]),e._v(" "),t("li",[e._v("Q")]),e._v(" "),t("li",[e._v("slient_ (prefix)")])]),e._v(" "),t("h2",{attrs:{id:"kbuild-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kbuild-configuration"}},[e._v("#")]),e._v(" kbuild configuration")]),e._v(" "),t("ul",[t("li",[e._v("output dir:\n"),t("ul",[t("li",[e._v("create if not exist")]),e._v(" "),t("li",[e._v("make the target submake:\ncd to output dir, run the makefile(current makefile) again, set KBULD_SRC to avoid recursive invocation,then the output dir will changed to the output dir\n"),t("ul",[t("li",[e._v("sub-make: FORCE\n$(Q)$(MAKE) -C $(KBUILD_OUTPUT) KBUILD_SRC=$(CURDIR) "),t("br"),e._v("\n-f $(CURDIR)/Makefile $(filter-out _all sub-make,$(MAKECMDGOALS))")])])])])])]),e._v(" "),t("h2",{attrs:{id:"check-code-parameter-c"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-code-parameter-c"}},[e._v("#")]),e._v(' check code parameter "C"')]),e._v(" "),t("ul",[t("li",[e._v("C")]),e._v(" "),t("li",[e._v("KBUILD_CHECKSRC")])]),e._v(" "),t("h2",{attrs:{id:"build-external-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-external-module"}},[e._v("#")]),e._v(" build external module")]),e._v(" "),t("ul",[t("li",[e._v("M")]),e._v(" "),t("li",[e._v("KBUILD_EXTMOD")])]),e._v(" "),t("h2",{attrs:{id:"get-archetecture-host-compiler-and-so-on"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-archetecture-host-compiler-and-so-on"}},[e._v("#")]),e._v(" get archetecture, host compiler and so on")]),e._v(" "),t("ul",[t("li",[e._v("ARCH")]),e._v(" "),t("li",[e._v("HOSTCC")])]),e._v(" "),t("h2",{attrs:{id:"kbuild-configuration-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kbuild-configuration-2"}},[e._v("#")]),e._v(" Kbuild configuration")]),e._v(" "),t("ul",[t("li",[e._v("include Kbuild.include")])]),e._v(" "),t("h2",{attrs:{id:"cross-compiler-settting-arm-none-eabi-gcc-ld-ar-nm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cross-compiler-settting-arm-none-eabi-gcc-ld-ar-nm"}},[e._v("#")]),e._v(" cross compiler settting(arm-none-eabi-gcc,ld,ar,nm...)")]),e._v(" "),t("h2",{attrs:{id:"make-xxx-deconfig-to-generate-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-xxx-deconfig-to-generate-config"}},[e._v("#")]),e._v(" make xxx_deconfig to generate .config")]),e._v(" "),t("ul",[t("li",[e._v("scripts/basic: build file-scripts/basic/fixdep")]),e._v(" "),t("li",[e._v("scripts/kconfig xxx_defconfig:generate .config for uboot")])]),e._v(" "),t("h2",{attrs:{id:"the-process-of-make"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-process-of-make"}},[e._v("#")]),e._v(" the process of make")]),e._v(" "),t("ul",[t("li",[e._v('default target: "_all" which depends "all" which depends ALL-y')]),e._v(" "),t("li",[e._v("ALL-y: depend on a series of files which contains u-boot.bin, which is the final file")]),e._v(" "),t("li",[e._v("u-boot.bin depends one a series of sub dir's built-in.o")])]),e._v(" "),t("h1",{attrs:{id:"u-boot-boot-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#u-boot-boot-flow"}},[e._v("#")]),e._v(" u-boot boot flow")]),e._v(" "),t("h2",{attrs:{id:"analysis-of-the-u-boot-lds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analysis-of-the-u-boot-lds"}},[e._v("#")]),e._v(" analysis of the u-boot.lds")]),e._v(" "),t("ul",[t("li",[e._v("__image_cpoy_start")]),e._v(" "),t("li",[e._v("vectors.S\n"),t("ul",[t("li",[e._v("_start\n"),t("ul",[t("li",[e._v("define interruput vecotor table")]),e._v(" "),t("li",[e._v("b reset")])])])])])]),e._v(" "),t("h2",{attrs:{id:"reset-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset-function"}},[e._v("#")]),e._v(" reset function")]),e._v(" "),t("ul",[t("li",[e._v("location: arch/arm/cpu/armv7/start.S:when we don't start from memory,set up memory and board specific bits prior to (before) relocation (move the u-boot to memory). Relocate armboot to ram. Setup stack.")]),e._v(" "),t("li",[e._v("b save_boot_params(stack not initialized, do not save to stack)\n"),t("ul",[t("li",[e._v("b save_boot_params_ret\n"),t("ul",[t("li",[e._v("cpsr register restore the value of cpu mode: set svc32 mode, close FIQ and IRQ")]),e._v(" "),t("li",[e._v("set up the vector table to redirect to _start(0X87800000)")]),e._v(" "),t("li",[e._v("cpu_init_cp15")]),e._v(" "),t("li",[e._v("cpu_init_crit\n"),t("ul",[t("li",[e._v("b lowlevel_init(@ go setup pll, mux, memory)\n"),t("ul",[t("li",[e._v("set sp pointer")]),e._v(" "),t("li",[e._v("b s_init\n"),t("ul",[t("li",[e._v("null function for I.MX6ULL")])])])])])])]),e._v(" "),t("li",[e._v("_main\n"),t("ul",[t("li",[e._v("config sp pointer")]),e._v(" "),t("li",[e._v("transmit sp's value to board_init_f_alloc_reserve, which reserve the area of malloc and gd")]),e._v(" "),t("li",[e._v("board_init_f_init_reserve: set the gd->molloc_base")]),e._v(" "),t("li",[e._v("board_init_f\n"),t("ul",[t("li",[e._v("init_sequence_f\n"),t("ul",[t("li",[e._v("initialize a series of peripheral")]),e._v(" "),t("li",[e._v("initialize and config the memory map")])])])])]),e._v(" "),t("li",[e._v("set sp and gd again: in DDR")]),e._v(" "),t("li",[e._v("set lr to here(config the return address of other function)")]),e._v(" "),t("li",[e._v("relocate_code\n"),t("ul",[t("li",[e._v("copy code")]),e._v(" "),t("li",[e._v("when jump to a function user bl, which is position-independent")]),e._v(" "),t("li",[e._v("fixloop function config the Label to ensure the address after rolocation is correct")])])]),e._v(" "),t("li",[e._v("relocate_vectors")]),e._v(" "),t("li",[e._v("c_runtime_cpu_setup\n"),t("ul",[t("li",[e._v("invalidate I-cache and ensure the synchronization of data and instruction")])])]),e._v(" "),t("li",[e._v("run_main_loop\n"),t("ul",[t("li",[e._v("main_loop\n"),t("ul",[t("li",[e._v("autoboot_command: execute some commands at the end of the countdown if no button is pressed")]),e._v(" "),t("li",[e._v("cli_loop: wait commands if button has been pressed\n"),t("ul",[t("li",[e._v("cmd_process")])])])])])])])])])])])])])]),e._v(" "),t("h1",{attrs:{id:"bootz-start-the-linux-kernel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bootz-start-the-linux-kernel"}},[e._v("#")]),e._v(" bootz start the linux kernel")])])}),[],!1,null,null,null);t.default=o.exports}}]);